
# 🏦 API Banco

Esta API permite a gestão de contas bancárias, incluindo a criação de contas, transações, atualização de dados, exclusão de contas, consulta de saldo e emissão de extratos. 


## 🔍 Índice 

* [Funcionalidades](#-Funcionalidades)
* [Tecnologias](#%EF%B8%8F-tecnologias)
* [Programas necessários](#%EF%B8%8F-programas-necessários)
* [Documentação da API](#-Documentação-da-API)
    * [Lista todas as contas bancárias existentes](#Lista-todas-as-contas-bancárias-existentes)
    * [Cria uma conta bancária](#Cria-uma-conta-bancária)
    * [Atualizar usuário da conta bancária](#Atualizar-usuário-da-conta-bancária)
    * [Excluir uma conta bancária](#Excluir-uma-conta-bancária)
    * [Depositar em uma conta bancária](#Depositar-em-uma-conta-bancária)
    * [Sacar de uma conta bancária](#Sacar-de-uma-conta-bancária)
    * [Transferir valores entre contas bancárias](#Transferir-valores-entre-contas-bancárias)
    * [Consultar saldo da conta bancária](#Consultar-saldo-da-conta-bancária)
    * [Emitir extrato bancário](#Emitir-extrato-bancário)
* [Rodando localmente](#%EF%B8%8F-rodando-localmente)


## 💡 Funcionalidades

- Criar conta bancária
- Listar contas bancárias
- Atualizar os dados do usuário da conta bancária
- Excluir uma conta bancária
- Depósitar em uma conta bancária
- Sacar de uma conta bancária
- Transferir valores entre contas bancárias
- Consultar saldo da conta bancária
- Emitir extrato bancário


## 🖥️ Tecnologias

* Javascript
* Node
* Express

## ⚙️ Programas necessários
* NodeJs
# 📃 Documentação da API

## Lista todas as contas bancárias existentes

```http
  GET /contas?senha_banco=Cubos123Bank
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `senha` | `string` | Senha do Banco |

| Request  | Response   |
| :---------- | :--------- | 
| ![Screenshot](https://i.imgur.com/mp9cuas.png?1) | ![Screenshot](https://i.imgur.com/HFe99DU.png?1) |


## Cria uma conta bancária

```http
  POST /contas
```
| JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**|
| `cpf`      | `number` | **Obrigatório** cpf válido|
| `data_nascimento`      | `number` | **Obrigatório**|
| `telefone`      | `number` | **Obrigatório**|
| `email`      | `string` | **Obrigatório** email válido|
| `senha`      | `string` | **Obrigatório**|

| Request  | Response   |
| :---------- | :--------- | 
| ![Screenshot](https://i.imgur.com/xka3fog.png) | ![Screenshot](https://i.imgur.com/VHTkuyY.png) |


## Atualizar usuário da conta bancária

```http
  PUT /contas/:numeroConta/usuario
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `:numeroConta` | `number` | **Obrigatório** id da conta |


| JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Opcional**|
| `cpf`      | `number` | **Opcional**|
| `data_nascimento`      | `number` | **Opcional**|
| `telefone`      | `number` | **Opcional**|
| `email`      | `string` | **Opcional**|
| `senha`      | `string` | **Opcional**|

| Request  | Response   |
| :---------- | :--------- | 
| ![Screenshot](https://i.imgur.com/yu0E3p5.png) | ![Screenshot](https://i.imgur.com/uijaNYa.png) |


## Excluir uma conta bancária

```http
  DELETE /contas/:numeroConta
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `:numeroConta` | `number` | **Obrigatório** id da conta |

| Request  | Response   |
| :---------- | :--------- | 
| ![Screenshot](https://i.imgur.com/evzG9Qd.png) | ![Screenshot](https://i.imgur.com/HBhS9OQ.png) |


## Depositar em uma conta bancária

```http
  POST /transacoes/depositar
```

| JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `numero_conta`      | `number` | **Obrigatório** id da conta|
| `valor`      | `number`  | **Obrigatório** valor a ser depositado|

| Request  | Response   |
| :---------- | :--------- | 
| ![Screenshot](https://i.imgur.com/Lbrm9oO.png) | ![Screenshot](https://i.imgur.com/ny6LVyK.png) |


## Sacar de uma conta bancária

```http
  POST /transacoes/sacar
```

| JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `numero_conta`      | `number` | **Obrigatório** id da conta|
| `valor`      | `number`  | **Obrigatório** valor a ser sacado|
| `senha`      | `string`  | **Obrigatório** senha da conta|

| Request  | Response   |
| :---------- | :--------- | 
| ![Screenshot](https://i.imgur.com/EmtT2ua.png) | ![Screenshot](https://i.imgur.com/j9iZ8fM.png) |


## Transferir valores entre contas bancárias

```http
  POST /transacoes/transferir
```

| JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `numero_conta_origem`      | `number` | **Obrigatório** id da conta de origem|
| `numero_conta_destino`      | `number` | **Obrigatório** id da conta de destino|
| `valor`      | `number`  | **Obrigatório** valor a ser sacado|
| `senha`      | `string`  | **Obrigatório** senha da conta de origem|

| Request  | Response   |
| :---------- | :--------- | 
| ![Screenshot](https://i.imgur.com/5W3vXYM.png) | ![Screenshot](https://i.imgur.com/8NNC5Ix.png) |


## Consultar saldo da conta bancária

```http
  GET /contas/saldo?numero_conta=123&senha=123
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `numeroConta` | `number` | **Obrigatório** id da conta |
| `senha` | `string` | **Obrigatório** senha da conta |

| Request  | Response   |
| :---------- | :--------- | 
| ![Screenshot](https://i.imgur.com/tKIffsk.png) | ![Screenshot](https://i.imgur.com/4RoqG2Q.png) |

## Emitir extrato bancário

```http
  GET /contas/extrato?numero_conta=123&senha=123
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `numeroConta` | `number` | **Obrigatório** id da conta |
| `senha` | `string` | **Obrigatório** senha da conta |

| Request  | Response   |
| :---------- | :--------- | 
| ![Screenshot](https://i.imgur.com/wdrv5M7.png) | ![Screenshot](https://i.imgur.com/eTOiMjz.png) |

# 🛠️ Rodando localmente

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


    
