const commonLib = require("./commonLib");
const Web3 = require("web3");
const logger = require("./logger");
const resolve = require("path");
const appRoot = require("app-root-path");
const keythereum = require("keythereum-pure-js");
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/ba91a3456e6a47ef92414fbbc23a444b"
  )
);

exports.createEthAddress = (pass) => {
  logger.info("create ethereum address");
  const dk = keythereum.create({
    keyBytes: 32,
    ivBytes: 16,
  });
  
  const keyObject = keythereum.dump(pass, dk.privateKey, dk.salt, dk.iv, {
    kdf: "pbkdf2",
    cipher: "aes-128-ctr",
    kdfparams: {
      c: 262144,
      dklen: 32,
      prf: "hmac-sha256",
    },
  });
  keythereum.exportToFile(keyObject, appRoot.path+"/keystore")
  logger.info(`create eth key is 0x${keyObject.address}`);
  logger.info(`create eth pass is ${pass}`);
  return "0x" + keyObject.address;
};

