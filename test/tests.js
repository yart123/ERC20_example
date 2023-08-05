const IaroToken = artifacts.require("IaroToken");
const truffleAssert = require('truffle-assertions');

contract("IaroToken", (accounts) => {
  const ownerAccount = accounts[0];
  const userAccount1 = accounts[1];
  const userAccount2 = accounts[2];

  beforeEach(async () => {
    instance = await IaroToken.new({ from: ownerAccount });
  });

  it("Both owner and users should be able to transfer and burn tokens", async () => {
    // Making sure owner can mint
    await instance.mint(1337,{from: ownerAccount})
    let mintedBalance = await instance.balanceOf.call(ownerAccount)
    assert.equal(mintedBalance, 1337);

    // Making sure owner can trasnfer
    await instance.transfer(userAccount1, 337, {from: ownerAccount})
    let balanceAfterOwnerTransfer0 = await instance.balanceOf.call(ownerAccount)
    let balanceAfterOwnerTransfer1 = await instance.balanceOf.call(userAccount1)
    assert.equal(balanceAfterOwnerTransfer0, 1000);   
    assert.equal(balanceAfterOwnerTransfer1, 337);

    // Making sure non-owner can transfer
    await instance.transfer(userAccount2, 37, {from: userAccount1})
    let balanceAfterUserTransfer1 = await instance.balanceOf.call(userAccount1)
    let balanceAfterUserTransfer2 = await instance.balanceOf.call(userAccount2)
    assert.equal(balanceAfterUserTransfer1, 300);
    assert.equal(balanceAfterUserTransfer2, 37);

    // Making sure non-owner can burn
    await instance.burn(200, {from:userAccount1})
    let balanceAfterBurn = await instance.balanceOf.call(userAccount1)
    assert.equal(balanceAfterBurn, 100);
  });

  it("User should not be able to mint tokens", async () => {
    // Attempting to mint as a user 
    await truffleAssert.reverts(
      instance.mint(1337,{from: userAccount1}),
      "VM Exception while processing transaction: revert"
    )

    let mintedBalance = await instance.balanceOf.call(ownerAccount)
    assert.equal(mintedBalance, 0);
  });
});