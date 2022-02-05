require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food cycle deny remain public hunt flower army gesture'; 
let testAccounts = [
"0x40056eec1991e6c494dc7f8add8337aee7209c83ca06e0414c02e58ee6672f5f",
"0x0fa19ea58674f8e04f5987c9eda30f936eb8ea232498af1057c1640e86ba3adc",
"0x99c3d5739bb88cd0472a34235c92032286fc522f6e4e8b2a7c2089273a0df4d6",
"0xedf411cd385f07241574bb25d27d6a4cda199695b32f2757a2aea76c1e4ec017",
"0x59ab2ef2b119e2357203cb06261a399b07cdbd7e36d8a7f161f0e55424129c30",
"0xb821c955e14b5d75070ab2c847b4efa94b50118f10fc8892628ecc5c3266daf7",
"0x3006c17c4a56b63e46ddd5aa17380bc10904575d5f237fc10853d24ae5b2f745",
"0x16b351a6d5e9ae7127db885e536e6123f09a562403850f444df5deaafe03eb13",
"0xa85a43c65737bc7d77fb8ff86ad740c4e837197a4897cd5e9b01626241b28c5a",
"0x90f5520a74525a4d9677c833240a2576d1dce269ecd4c6a1fa5351b066e6e874"
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

