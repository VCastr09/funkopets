import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.goerliTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'DARUMACATSNFT',
  tokenName: 'Darumacats',
  tokenSymbol: 'DRCTS',
  hiddenMetadataUri: 'ipfs://bafybeiflhpriuv73o7bykwru7cxhvdohse33kxiup6ibkycxc7wy23u5h4/',
  maxSupply: 1000,
  whitelistSale: {
    price: 0.0047,
    maxMintAmountPerTx: 1000,
  },
  preSale: {
    price: 0.0047,
    maxMintAmountPerTx: 1000,
  },
  publicSale: {
    price: 0.0055,
    maxMintAmountPerTx: 1000,
  },
  contractAddress: '0x61c7fA224D8E2f5533748134F52B626ed12a66CC',
  marketplaceIdentifier: 'darumacats-nft',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
