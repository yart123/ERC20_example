# Iaro's Example ERC20 Token

This is an example token project, created for MetaCrafters Ethereum course.
Here's how you setup the project:
1. Start Truffle console in development mode

   ```bash
   truffle develop
   ```

   In the Truffle console, execute

   ```
   compile
   migrate
   ```
   If you want to remigrate existing contracts, run `migrate --reset` instead of simply `migrate`.

2. Test your contract

   In the interactive Truffle console, run the following commands:

   ```
   test
   ```

   Then you will tests from `tests` folder get executed:

   ```
   Contract: IaroToken
    ✔ Both owner and users should be able to transfer and burn tokens
    ✔ User should not be able to mint tokens
   ```
