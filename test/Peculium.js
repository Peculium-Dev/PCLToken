const Peculium = artifacts.require("Peculium");

const BigNumber = require('bignumber.js'); // needed because Ethereum number are too big
const truffleAssert = require('truffle-assertions'); // needed for emit event tests

contract('Peculium test', async (accounts) => {

  it("should put 220785652629857398 PCL to the sender", async () => {
     let decimals = new BigNumber("8");
     
     let instance = await Peculium.new({from: accounts[0]});
     let tx = await truffleAssert.createTransactionResult(instance, instance.transactionHash);
     
     let balance = await instance.balanceOf(accounts[0],{from: accounts[0]});
     let expected = new BigNumber("220785652629857398");
     truffleAssert.eventEmitted(tx, 'Transfer', (ev) => {
         return ev.from === "0x0000000000000000000000000000000000000000" && ev.to === accounts[0]  && ev.value.toString() ===  expected.toString();
         }, 'Transfer event should be emitted during deployment');

     assert.equal(balance.toString(),expected.toString());
  })

  it("should have name Peculium", async () => {
     let instance = await Peculium.new({from: accounts[0]});
     let name = await instance.name();
     let expected = "Peculium";
     assert.equal(name, expected);
  })

  it("should have symbol PCL", async () => {
     let instance = await Peculium.new({from: accounts[0]});
     let symbol = await instance.symbol({from: accounts[0]});
     let expected = "PCL";
     assert.equal(symbol, expected);
  })

  it("should have decimals number equal 8 ", async () => {
     let instance = await Peculium.new({from: accounts[0]});
     let decimals = await instance.decimals({from: accounts[0]});
     let expected = new BigNumber("8");
     assert.equal(decimals.toString(), expected.toString());
  })

  it("should have initial supply equal 220785652629857398 ", async () => {
     let decimals = new BigNumber("8");
     let instance = await Peculium.new({from: accounts[0]});
     let initial_supply = await instance.INITIAL_SUPPLY({from: accounts[0]});
     let expected = new BigNumber("220785652629857398");
     assert.equal(initial_supply.toString(), expected.toString());
  })
  
  it("should burn token", async () => {
    let decimals = new BigNumber("8");
    let amount = (new BigNumber("10")).times( (new BigNumber("10")).pow(decimals));
    let instance = await Peculium.new({from: accounts[0]});
    let account_starting_balance = await instance.balanceOf(accounts[0],{from: accounts[0]});
    let tx = await instance.burn(amount, {from: accounts[0]});
    let account_ending_balance = await instance.balanceOf(accounts[0],{from: accounts[0]});

    truffleAssert.eventEmitted(tx, 'Transfer', (ev) => {
         return ev.from === accounts[0] && ev.to === "0x0000000000000000000000000000000000000000" && ev.value.toString() ===  amount.toString();
         }, 'Transfer event should be emitted with correct parameters');

    assert.equal(account_ending_balance.toString(), (BigNumber(account_starting_balance).minus(amount)).toString(), "Amount wasn't correctly burned from the sender");

  })
})
