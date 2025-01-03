# Solana CLI Wallet

A simple Command Line Interface (CLI) wallet for interacting with the Solana blockchain. This wallet allows you to create accounts, check balances, and send SOL transactions on the Solana Devnet.

Built with TypeScript and @solana/web3.js, this project is perfect for developers looking to learn Solana development or build their own wallet tools.

## Features

- **Create a new Solana account:** Generate a new keypair.

- **Check account balance:** View the balance of a Solana account.

- **Send SOL:** Transfer SOL from one account to another.

- **Persistent keypair storage:** Save and load keypairs from a file for reuse.

## Installation

- Clone the repository:

  ```bash
  git clone https://github.com/sum1t-here/solana-cli-wallet.git
  cd solana-cli-wallet
  ```

- Install dependencies:
  ```bash
  bun install
  ```

## Usage

Run the CLI wallet:

```bash
bun run index.ts
```

**_Commands_**

- Create account:
  - Generates a new Solana keypair.
- Check Balance:
  - Displays the balance of the loaded account.
- Send SOL:
  - Sends SOL from the loaded account to a recipient.
- Exit:
  - Exits the CLI

## File Structure

        .
        ├── node_modules
        ├── .gitignore
        ├── bun.lockb
        ├── index.ts           # Main CLI logic
        ├── package.json       # Project dependencies and scripts
        ├── README.md          # TypeScript configuration
        └── tsconfig.json      # Project documentation

## Demo

## Screenshots

## Dependencies

- [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/): Solana JavaScript API.
- [chalk](https://www.npmjs.com/package/chalk): For colored console output.
- [inquirer](https://www.npmjs.com/package/inquirer): For interactive CLI prompts.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

- Fork the repository.

- Create a new branch (git checkout -b feature/YourFeatureName).

- Commit your changes (git commit -m 'Add some feature').

- Push to the branch (git push origin feature/YourFeatureName).

- Open a pull request.

## Acknowledgements

- [@solana/web3.js Documentation](https://solana-labs.github.io/solana-web3.js/index.html)
- [Solana Documentation](https://solana.com/docs)

## Support

If you have any questions or need help, feel free to open an issue or reach out to me at sumitmazumdar.eth@gmail.com.

#

Enjoy building on Solana! 🚀

#
