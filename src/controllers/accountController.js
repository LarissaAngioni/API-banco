let { contas: accounts } = require("../bancodedados");
const { findAccount } = require("../services/accountService");
const {
  findDeposits,
  findWithdrawals,
  findSentTransfers,
  findIncomingTransfer,
} = require("../services/transactionsService");
let id = 1;

const getAccounts = (req, res) => {
  return res.status(200).send(accounts);
};

const createAccount = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  accounts.push({
    numero: id++,
    saldo: 0,
    usuario: {
      nome,
      cpf,
      data_nascimento,
      telefone,
      email,
      senha,
    },
  });

  return res.status(201).send();
};

const updateUser = (req, res) => {
  const { numeroConta } = req.params;

  const payload = req.body;

  let account = accounts.find((account) => {
    return account.numero === Number(numeroConta);
  });

  account.usuario = {
    nome: payload.nome || account.usuario.nome,
    cpf: payload.cpf || account.usuario.cpf,
    data_nascimento: payload.data_nascimento || account.usuario.data_nascimento,
    telefone: payload.telefone || account.usuario.telefone,
    email: payload.email || account.usuario.email,
    senha: payload.senha || account.usuario.senha,
  };

  return res.status(204).send();
};

const deleteAccount = (req, res) => {
  const { numeroConta } = req.params;

  const account = findAccount(numeroConta);

  if (account.saldo !== 0) {
    return res
      .status(400)
      .send({ mensagem: "A conta só pode ser removida se o saldo for zero!" });
  }

  accounts = accounts.filter((conta) => {
    return conta.numero !== Number(numeroConta);
  });

  return res.status(204).send();
};

const balance = (req, res) => {
  const { numero_conta } = req.query;

  const account = findAccount(numero_conta);

  return res.status(200).send({ saldo: account.saldo });
};

const bankStatement = (req, res) => {
  const { numero_conta } = req.query;

  const depositosExtrato = findDeposits(numero_conta);

  const saquesExtrato = findWithdrawals(numero_conta);

  const transferenciasEnviadas = findSentTransfers(numero_conta);

  const transferenciasRecebidas = findIncomingTransfer(numero_conta);

  return res.status(200).send({
    depositos: depositosExtrato,
    saques: saquesExtrato,
    transferenciasEnviadas,
    transferenciasRecebidas,
  });
};

module.exports = {
  getAccounts,
  createAccount,
  updateUser,
  deleteAccount,
  balance,
  bankStatement,
};
