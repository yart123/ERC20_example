var IaroToken = artifacts.require("IaroToken");
module.exports = function(deployer) {
  deployer.deploy(IaroToken);
}