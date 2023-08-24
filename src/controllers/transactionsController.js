let {
  depositos: deposits,
  transferencias: transfers,
  saques: withdrawals,
} = require("../bancodedados");

const { findAccount } = require("../services/accountService");

const format = require("date-fns/format");

const deposit = (req, res) => {
  const { numero_conta, valor } = req.body;

  const account = findAccount(numero_conta);

  account.saldo += Number(valor);

  deposits.push({
    data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
    numero_conta: Number(numero_conta),
    valor: Number(valor),
  });

  return res.status(204).send();
};

const withdraw = (req, res) => {
  const { numero_conta, valor } = req.body;

  const account = findAccount(numero_conta);

  account.saldo -= Number(valor);

  withdrawals.push({
    data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
    numero_conta: Number(numero_conta),
    valor: Number(valor),
  });

  return res.status(204).send();
};

const transfer = (req, res) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  const sourceAccount = findAccount(numero_conta_origem);

  const destinationAccount = findAccount(numero_conta_destino);

  sourceAccount.saldo -= Number(valor);
  destinationAccount.saldo += Number(valor);

  transfers.push({
    data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
    numero_conta_origem: Number(numero_conta_origem),
    numero_conta_destino: Number(numero_conta_destino),
    valor: Number(valor),
  });

  return res.status(204).send();
};

module.exports = {
  deposit,
  withdraw,
  transfer,
};
