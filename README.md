# Peculium Token Smart-Contract

## Peculium Contract

The Peculium contract is a standard ERC-20 token:
 - name: Peculium
 - symbol: PCL
 - decimals: 8
 - total supply : 2,207,856,526.29857398

Additional features :

 - user can burn tokens.

## Playing with the contract

You will need NodeJS, npm , truffle and open-zepplin contracts

You will need a local blockchain (like ganache) for local deployment and test

You will also need truffle-hdwallet-provider with a metamask mnemonic and an infura api key to deploy contract on Ropsten

You will need solidity-coverage for code coverage

### Install

```
git clone https://github.com/Peculium-Dev/PCLToken
cd PCLToken
npm install -g truffle
npm install -g coveralls
npm install truffle-assertions
npm install --save-dev solidity-coverage
npm install -E openzeppelin-solidity
```

### Compile
```
truffle compile
```
### Deploy on local network
(start local blockchain on port 8545)
```
truffle deploy
```

### Run tests
(start local blockchain on port 8545)
```
truffle test
```
### Run code coverage
```
npm run coverage
```

## Ropsten

* Address of the contract : 0xc232e17876c45a38eb088d12ab74c14481c75360#code
* Etherscan Token Link: https://ropsten.etherscan.io/token/0xc232e17876c45a38eb088d12ab74c14481c75360
* Etherscan Contract Link : https://ropsten.etherscan.io/address/0xc232e17876c45a38eb088d12ab74c14481c75360

## Mainnet
* Address of the contract : 0x0f02e27745e3b6e9e1310d19469e2b5d7b5ec99a
* Etherscan Token Link : https://etherscan.io/token/0x0f02e27745e3b6e9e1310d19469e2b5d7b5ec99a
* Etherscan Contract Link : https://etherscan.io/address/0x0f02e27745e3b6e9e1310d19469e2b5d7b5ec99a

