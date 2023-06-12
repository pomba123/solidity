require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/X_F0qRqrweHEYMLvPqQgPz9XldS5F8e0",
      accounts: ["0f6540aadc0f2b1cb5050f62c4e1f8bf5d011aa8e65549e12eb013a14dca4731"],
    },
  },
};
