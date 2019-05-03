const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

beforeEach(() => {
  // get list of accounts
  web3.eth.getAccounts()
    .then(fetchedAccounts => {
      console.log('fetchedAccounts', fetchedAccounts);
    });
  // use an account to deploy contract
});

describe('inbox', () => {
  it('deploys a contract', () => {});
});

