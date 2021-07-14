require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan rival office pulse heavy ensure slot gauge'; 
let testAccounts = [
"0xc35a2757f2c995e18dc06ea42238277d9b48d1ee5ebc8b54c0b275b130aa0dc8",
"0x2c290cd9dea79ee325856f109fdda7b0c400304703649b4863a2119b37997a3d",
"0xde7220b2c04c1c25434e6d967ca1a7e18c590a29f19077d2eeb9902f67d60fb1",
"0x3388131a94b51ff0022cc2e9ab4e5bd06ab9854df43a0b9cbaf730415b9305b4",
"0x619363e003881d1ccd276970c706b74d1e1b9bb335ab72714a9c19379396c5a6",
"0xa8be7824a041b3002c73fc541eb430116125b80451b0aa38763d77dcad3040fa",
"0xc540892a84c533e6b0f5e3c947c20045cab0c1e1b885c9189c2decd564ebed06",
"0xf971663580a28d8ab8e4d53503b16ffbf10b0f65b45eff02ff991311858196a2",
"0x211d3c9e70587a230232830c211b168f010de4b2d2c91f3c602fbcf58808392b",
"0xa96e5c9ad97d3bd52c089830e629b2b5062a45948f7fa3559d0960eeaa1e2482"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

