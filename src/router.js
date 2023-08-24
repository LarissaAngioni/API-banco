const express = require("express");

const {
  getAccounts,
  createAccount,
  updateUser,
  deleteAccount,
  balance,
  bankStatement,
} = require("./controllers/accountController");

const {
  deposit,
  withdraw,
  transfer,
} = require("./controllers/transactionsController");

const {
  checkPassword,
  checkUserRequirements,
  findUser,
  validUpdate,
  checkBalanceRequirements,
  checkbankStatementRequirements,
} = require("./middlewares/accountMiddleware");

const {
  checkDepositRequirements,
  checkWithdrawRequirements,
  checkTransferRequirements,
} = require("./middlewares/transactionsMiddleware");

const router = express();

router.use(express.json());

router.get("/contas", checkPassword, getAccounts);
router.post("/contas", checkUserRequirements, createAccount);
router.put("/contas/:numeroConta/usuario", findUser, validUpdate, updateUser);
router.delete("/contas/:numeroConta", findUser, deleteAccount);
router.get("/contas/saldo", checkBalanceRequirements, balance);
router.get("/contas/extrato", checkbankStatementRequirements, bankStatement);

router.post("/transacoes/depositar", checkDepositRequirements, deposit);
router.post("/transacoes/sacar", checkWithdrawRequirements, withdraw);
router.post("/transacoes/transferir", checkTransferRequirements, transfer);

module.exports = router;
