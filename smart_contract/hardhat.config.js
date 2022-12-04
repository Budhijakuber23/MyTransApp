require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/KRn_fvR3NGZFNXkBYRIs1aV9jqkUe23G',
      accounts: ['177d38fba7dd6bd26dfae661fd491bf37e98806b4c47182ffea5eb7a10c2ed29'],
    },
  },
};