const { depositos, saques, transferencias } = require("../bancodedados");

const findDeposits = (numero_conta) => {
  const deposits = depositos.filter((deposito) => {
    return deposito.numero_conta === Number(numero_conta);
  });

  return deposits;
};

const findWithdrawals = (numero_conta) => {
  const withdrawals = saques.filter((saque) => {
    return saque.numero_conta === Number(numero_conta);
  });
  return withdrawals;
};

const findSentTransfers = (numero_conta) => {
  const transfer = transferencias.filter((transferencia) => {
    return transferencia.numero_conta_origem === Number(numero_conta);
  });

  return transfer;
};

const findIncomingTransfer = (numero_conta) => {
  const transfer = transferencias.filter((transferencia) => {
    return transferencia.numero_conta_destino === Number(numero_conta);
  });

  return transfer;
};

module.exports = {
  findDeposits,
  findWithdrawals,
  findSentTransfers,
  findIncomingTransfer,
};
