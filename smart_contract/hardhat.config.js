

require('@nomiclabs/hardhat-waffle')

module.exports ={
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/i-4XMw13oQx1Ci6b6opeDyAC7NyIijl-',
      accounts: [ 'c21fa89d54401dd2ea04e779a027b3fccc112076e7a2f491a3e492562771a24c' ]
    }
  }
}