
# API Banco

Esta API permite a gestão de contas bancárias, incluindo a criação de contas, transações, atualização de dados, exclusão de contas, consulta de saldo e emissão de extratos. 


## Funcionalidades

- Criar conta bancária
- Listar contas bancárias
- Atualizar os dados do usuário da conta bancária
- Excluir uma conta bancária
- Depósitar em uma conta bancária
- Sacar de uma conta bancária
- Transferir valores entre contas bancárias
- Consultar saldo da conta bancária
- Emitir extrato bancário


##



Javascript, Node, Express


## Documentação da API

#### Lista todas as contas bancárias existentes

```http
  GET /contas?senha_banco=Cubos123Bank
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `senha` | `string` | Senha do Banco |

#### Cria uma conta bancária

```http
  POST /contas
```
| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `json` | **Obrigatório**|
| `cpf`      | `json` | **Obrigatório** cpf válido|
| `data_nascimento`      | `json` | **Obrigatório**|
| `telefone`      | `json` | **Obrigatório**|
| `email`      | `json` | **Obrigatório** email válido|
| `senha`      | `json` | **Obrigatório**|


#### Atualizar usuário da conta bancária

```http
  PUT /contas/:numeroConta/usuario
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `:numeroConta` | `number` | **Obrigatório** id da conta |


| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `json` | **Opcional**|
| `cpf`      | `json` | **Opcional**|
| `data_nascimento`      | `json` | **Opcional**|
| `telefone`      | `json` | **Opcional**|
| `email`      | `json` | **Opcional**|
| `senha`      | `json` | **Opcional**|

#### Excluir uma conta bancária

```http
  DELETE /contas/:numeroConta
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `:numeroConta` | `number` | **Obrigatório** id da conta |


#### Depositar em uma conta bancária

```http
  POST /transacoes/depositar
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `numero_conta`      | `json` | **Obrigatório** id da conta|
| `valor`      | `json`  | **Obrigatório** valor a ser depositado|

#### Sacar de uma conta bancária

```http
  POST /transacoes/sacar
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `numero_conta`      | `json` | **Obrigatório** id da conta|
| `valor`      | `json`  | **Obrigatório** valor a ser sacado|
| `senha`      | `json`  | **Obrigatório** senha da conta|

#### Transferir valores entre contas bancárias

```http
  POST /transacoes/transferir
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `numero_conta_origem`      | `json` | **Obrigatório** id da conta de origem|
| `numero_conta_destino`      | `json` | **Obrigatório** id da conta de destino|
| `valor`      | `json`  | **Obrigatório** valor a ser sacado|
| `senha`      | `json`  | **Obrigatório** senha da conta de origem|

#### Consultar saldo da conta bancária

```http
  GET /contas/saldo?numero_conta=123&senha=123
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `numeroConta` | `number` | **Obrigatório** id da conta |
| `senha` | `number` | **Obrigatório** senha da conta |

#### Emitir extrato bancário

```http
  GET /contas/extrato?numero_conta=123&senha=123
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `numeroConta` | `number` | **Obrigatório** id da conta |
| `senha` | `number` | **Obrigatório** senha da conta |


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/LarissaAngioni/API-banco
```

Entre no diretório do projeto

```bash
  cd API-banco
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


    