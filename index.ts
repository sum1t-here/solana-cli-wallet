import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import chalk from "chalk";
import inquirer from "inquirer";

// Initialize connection to Solana Devnet
const connection = new Connection("https://api.devnet.solana.com");

// Helper function to create a new Solana account
function createAccount(): Keypair {
  const keypair = Keypair.generate();
  console.log(chalk.green("New account created!"));
  console.log(chalk.blue("Public Key:"), keypair.publicKey.toString());
  console.log(
    chalk.blue("Private Key:"),
    Buffer.from(keypair.secretKey).toString("hex")
  );
  return keypair;
}

// Helper function to check account balance
async function checkBalance(publicKey: PublicKey) {
  const balance = await connection.getBalance(publicKey);
  console.log(chalk.green(`Balance: ${balance / LAMPORTS_PER_SOL} SOL`));
}

// Helper function to airdrop SOL
async function airdrop(publicKey: PublicKey, amount: number) {
  const signature = await connection.requestAirdrop(
    publicKey,
    amount * LAMPORTS_PER_SOL
  );
  console.log(chalk.green(`Airdrop successful! Signature: ${signature}`));
}

// Helper function to send SOL
async function sendSol(from: Keypair, to: PublicKey, amount: number) {
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: to,
      lamports: amount * LAMPORTS_PER_SOL,
    })
  );

  const signature = await sendAndConfirmTransaction(connection, transaction, [
    from,
  ]);
  console.log(chalk.green(`Transaction successful! Signature: ${signature}`));
}

// Main CLI function
async function main() {
  const { command } = await inquirer.prompt({
    type: "list",
    name: "command",
    message: "What would you like to do?",
    choices: ["Create Account", "Check Balance", "Send SOL", "Airdrop", "Exit"],
  });

  switch (command) {
    case "Create Account":
      createAccount();
      break;

    case "Check Balance": {
      const { address } = await inquirer.prompt({
        type: "input",
        name: "address",
        message: "Enter the public key:",
      });
      await checkBalance(new PublicKey(address));
      break;
    }

    case "Send SOL": {
      const { from, to, amount } = await inquirer.prompt([
        {
          type: "input",
          name: "from",
          message: "Enter the sender’s private key (hex):",
        },
        {
          type: "input",
          name: "to",
          message: "Enter the recipient’s public key:",
        },
        {
          type: "number",
          name: "amount",
          message: "Enter the amount of SOL to send:",
        },
      ]);

      const fromKeypair = Keypair.fromSecretKey(
        Uint8Array.from(Buffer.from(from, "hex"))
      );
      const toPubkey = new PublicKey(to);
      await sendSol(fromKeypair, toPubkey, amount);
      break;
    }

    case "Airdrop": {
      const { address, amount } = await inquirer.prompt([
        {
          type: "input",
          name: "address",
          message: "Enter the public key:",
        },
        {
          type: "number",
          name: "amount",
          message: "Enter the amount of SOL to airdrop:",
        },
      ]);
      await airdrop(new PublicKey(address), amount);
      break;
    }

    case "Exit":
      console.log(chalk.yellow("Goodbye!"));
      process.exit(0);
  }

  // Loop back to the main menu
  main();
}

// Start the CLI
console.log(chalk.bold("Welcome to Solana CLI Wallet!"));
main();
