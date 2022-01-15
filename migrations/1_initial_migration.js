const Migrations = artifacts.require("Migrations");
const TodoList = artifacts.require("TodoList");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(TodoList);
};
