# Iaro's Example ERC20 Token

4. Start Truffle console in development mode

   ```bash
   truffle develop
   ```

   In the Truffle console, execute

   ```bash
   compile
   migrate
   ```
   If you want to remigrate existing contracts, run `migrate --reset` instead of simply `migrate`.

5. Test your contract

   In the interactive Truffle console, run the following commands:

   ```javascript
   let instance = await HelloWorld.deployed()
   instance.greet()
   ```

   Then you will see:

   ```bash
   'Hello World!'
   ```
