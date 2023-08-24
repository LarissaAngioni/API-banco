const { findAccount } = require("../services/accountService");

const checkDepositRequirements = (req, res, next) => {
  const { numero_conta, valor } = req.body;

  if (!numero_conta || !valor) {
    return res
      .status(400)
      .send({ mensagem: "O número da conta e o valor são obrigatórios!" });
  }

  if (valor <= 0) {
    return res
      .status(400)
      .send({ mensagem: "O valor de depósito precisa ser válido!" });
  }

  const account = findAccount(numero_conta);

  if (!account) {
    return res.status(404).send({ mensagem: "A conta informada não existe!" });
  }

  next();
};

const checkWithdrawRequirements = (req, res, next) => {
  const { numero_conta, valor, senha } = req.body;

  if (!numero_conta || !valor || !senha) {
    return res
      .status(400)
      .send({ mensagem: "O número da conta, valor e senha são obrigatórios!" });
  }

  const account = findAccount(numero_conta);

  if (!account) {
    return res.status(404).send({ mensagem: "A conta informada não existe!" });
  }

  if (senha !== account.usuario.senha) {
    return res.status(400).send({ mensagem: "Senha incorreta!" });
  }

  if (valor <= 0) {
    return res
      .status(400)
      .send({ mensagem: "O valor do saque precisa ser válido!" });
  }

  if (valor > account.saldo) {
    return res.status(400).send({ mensagem: "Saldo insuficiente!" });
  }

  next();
};

const checkTransferRequirements = (req, res, next) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  if (!numero_conta_destino || !numero_conta_origem || !valor || !senha) {
    return res.status(400).send({
      mensagem: "Os números das contas, valor e senha são obrigatórios!",
    });
  }

  const sourceAccount = findAccount(numero_conta_origem);
  if (!sourceAccount) {
    return res.status(404).send({ mensagem: "Conta de origem não existe!" });
  }

  const destinationAccount = findAccount(numero_conta_destino);
  if (!destinationAccount) {
    return res.status(404).send({ mensagem: "Conta de destino não existe!" });
  }

  if (senha !== sourceAccount.usuario.senha) {
    return res.status(400).send({ mensagem: "Senha incorreta!" });
  }

  if (Number(valor) > sourceAccount.saldo) {
    return res.status(400).send({ mensagem: "Saldo insuficiente!" });
  }

  next();
};

module.exports = {
  checkDepositRequirements,
  checkWithdrawRequirements,
  checkTransferRequirements,
};
