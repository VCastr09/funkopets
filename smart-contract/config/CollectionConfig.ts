import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MOONFROGS',
  tokenName: 'Moon Frogs',
  tokenSymbol: 'MFRGS',
  hiddenMetadataUri: 'ipfs://QmZfZSNjFWoSgbBSj1pkySi786YfR8ARCpWAz7DsRMQf53',
  maxSupply: 5555,
  whitelistSale: {
    price: 0.0047,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.0047,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.0047,
    maxMintAmountPerTx: 10,
  },
  contractAddress: '0x868686B66495c1532e7758A30D1B50Ad7BA5022E',
  marketplaceIdentifier: 'moon-frogs',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
