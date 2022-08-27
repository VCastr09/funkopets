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
  hiddenMetadataUri: 'ipfs://QmQbbK2XfcTwjEMJN4yTzkT1UkH5HHTFQRELe16jJgigDg/',
  maxSupply: 5555,
  whitelistSale: {
    price: 0.0047,
    maxMintAmountPerTx: 5555,
  },
  preSale: {
    price: 0.0047,
    maxMintAmountPerTx: 5555,
  },
  publicSale: {
    price: 0.0047,
    maxMintAmountPerTx: 5555,
  },
  contractAddress: '0x6edC3b673ae6679d63B62418Dac2f7707B23bb84',
  marketplaceIdentifier: 'moon-frogs',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
