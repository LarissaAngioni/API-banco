const { contas: accounts } = require("../bancodedados");

const findAccount = (numeroConta) => {
  const account = accounts.find((account) => {
    return account.numero === Number(numeroConta);
  });

  return account;
};

const findBalance = (numeroConta) => {
  const account = accounts.find((account) => {
    return account.numero === Number(numeroConta);
  });

  return account;
};

const validatePassaword = (senha) => {
  const arrayPassaword = senha.split("");
  const invalidPassaword = arrayPassaword.includes(" ");

  return invalidPassaword;
};

module.exports = {
  findAccount,
  validatePassaword,
};
