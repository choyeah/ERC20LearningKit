const myErc20 = artifacts.require("MyERC20");

module.exports = function(deployer) {
  deployer.deploy(myErc20);
};
