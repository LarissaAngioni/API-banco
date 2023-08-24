const { contas: accounts } = require("../bancodedados");

const { CPF } = require("@julioakira/cpf-cnpj-utils");

const validator = require("email-validator");

const {
  findAccount,
  validatePassaword,
} = require("../services/accountService");

const checkPassword = (req, res, next) => {
  const { senha_banco } = req.query;

  if (!senha_banco) {
    return res.status(400).send({ mensagem: "Insira uma senha!" });
  }

  if (senha_banco !== "Cubos123Bank") {
    return res
      .status(400)
      .send({ mensagem: "A senha do banco informada é inválida!" });
  }

  next();
};

const checkUserRequirements = (req, res, next) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  if (!nome) {
    return res.status(400).send({ mensagem: "Informe o nome!" });
  }

  if (!cpf) {
    return res.status(400).send({ mensagem: "Informe o cpf!" });
  }

  if (!data_nascimento) {
    return res.status(400).send({ mensagem: "Informe a data de nascimento!" });
  }

  if (!telefone) {
    return res.status(400).send({ mensagem: "Informe o telefone!" });
  }

  if (!email) {
    return res.status(400).send({ mensagem: "Informe o email!" });
  }

  if (!senha) {
    return res.status(400).send({ mensagem: "Informe uma senha!" });
  }

  const validCpf = CPF.Validate(cpf);

  if (!validCpf) {
    return res.status(400).send({ mensagem: "Informe um cpf válido!" });
  }

  const validEmail = validator.validate(email);

  if (!validEmail) {
    return res.status(400).send({ mensagem: "Informe um email válido!" });
  }

  const invalidPassaword = validatePassaword(senha);

  if (invalidPassaword) {
    return res.status(400).send({ mensagem: "Informe uma senha válida!" });
  }

  const cpfExiste = accounts.find((conta) => {
    return conta.usuario.cpf === cpf;
  });
  const emailExiste = accounts.find((conta) => {
    return conta.usuario.email === email;
  });

  if (cpfExiste || emailExiste) {
    return res
      .status(400)
      .send({ mensagem: "Já existe uma conta com o cpf ou e-mail informado!" });
  }

  next();
};

const findUser = (req, res, next) => {
  const { numeroConta } = req.params;

  const account = findAccount(numeroConta);

  if (!account) {
    return res.status(404).send({ mensagem: "Usuário não encontrado!" });
  }

  next();
};

const validUpdate = (req, res, next) => {
  const { cpf, email, senha } = req.body;
  const { numeroConta } = req.params;

  const account = findAccount(numeroConta);

  const validCpf = CPF.Validate(cpf || account.usuario.cpf);

  if (!validCpf) {
    return res.status(400).send({ mensagem: "Informe um cpf válido!" });
  }

  const validEmail = validator.validate(email || account.usuario.email);

  if (!validEmail) {
    return res.status(400).send({ mensagem: "Informe um email válido!" });
  }

  const invalidPassaword = validatePassaword(senha || account.usuario.senha);

  if (invalidPassaword) {
    return res.status(400).send({ mensagem: "Informe uma senha válida!" });
  }

  next();
};

const checkBalanceRequirements = (req, res, next) => {
  const { numero_conta, senha } = req.query;

  if (!numero_conta || !senha) {
    return res
      .status(400)
      .send({ mensagem: "O número da conta e senha são obrigatórios!" });
  }

  const account = findAccount(numero_conta);

  if (!account) {
    return res.status(404).send({ mensagem: "Conta não encontrada!" });
  }

  if (senha !== account.usuario.senha) {
    return res.status(400).send({ mensagem: "Senha incorreta!" });
  }

  next();
};

const checkbankStatementRequirements = (req, res, next) => {
  const { numero_conta, senha } = req.query;

  if (!numero_conta || !senha) {
    return res
      .status(400)
      .send({ mensagem: "O número da conta e senha são obrigatórios!" });
  }

  const account = findAccount(numero_conta);

  if (!account) {
    return res.status(404).send({ mensagem: "Conta não encontrada!" });
  }

  if (senha !== account.usuario.senha) {
    return res.status(400).send({ mensagem: "Senha incorreta!" });
  }

  next();
};

module.exports = {
  checkPassword,
  checkUserRequirements,
  findUser,
  validUpdate,
  checkBalanceRequirements,
  checkbankStatementRequirements,
};
