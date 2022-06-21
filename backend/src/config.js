require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "FEMBOTS";
const description = "A fusion of women and robots ready to enter the metaverse to fight for equality.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 4444,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Clothes" },
      { name: "Eyes" },
      { name: "Head" },
      { name: "Mouth" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://fembotsnft.com", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'FEMBOTS';
const CONTRACT_SYMBOL = 'FB';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x02C00509C7d9bC2C20018d943Cc35e861A2Ca561';
const TREASURY_ADDRESS = '0x02C00509C7d9bC2C20018d943Cc35e861A2Ca561';
const MAX_SUPPLY = 4444; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 104; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 5; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-06-22T18:00:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-06-21T16:00:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 500; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x02C00509C7d9bC2C20018d943Cc35e861A2Ca561"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x02C00509C7d9bC2C20018d943Cc35e861A2Ca561", 
"0xD1C523DFE89bA40f6Be8CCAdCf42326f27ed2eC1",
"0xbd4D2ea14B60CE0Aa6218c786e7C6e7190F68d77",
"0x4C77952aecc40494719C9DFeD5140cF7bcA71F20", 
"0x85571311F874D0c4EF20a79989287DeDb7157617",
"0x7A67963b4890537AD600Ec1a90187fFe2D52E9aB",
"0xc13e9c2386B97395aaBdB0D12E3aEFa66492D7b1", 
"0xc1094BfA24874b8d6dDC8c12bb6858afdCbfDD95", 
"0xEc5b8D5E5b52f7db11A771Bb0c36Aa8ca685290F", 
"0x87Ee795CbcaDCe855F3623555D972e0617E5767C",
"0xDF005A4272cCebA1F9cc99Cf77712fba03D9188F",
"0x50f504e26Bf902330614617430a99DCF5E0797c0",
"0x7d104b41650DB26a10F237Bce7080e9a5572745A",
"0xc13e9c2386b97395aabdb0d12e3aefa66492d7b1",
"0xa2c1C1eb59AbBF5a3aF4c501faEbf34878f77100",
"0x17a77F37C207BaA01c21efC24C5384B85A122aa1",
"0x23271d20830fE7aD2c7FD7D376F928c2B113a112",
"0xf037fC24abE18782A7c59c85C2c3eF3655d1C0E2",
"0x18776Df8A9c5990344CB81d6f4b5577532A94E81",
"0xcA04707F7b62e15519E0aA97a69c7f47A1b72b29",
"0x11CD613AF685174DBED3AA13DDfBd613e0976b84",
"0x4dC327ab691F08Eb90241E5c89b67617511f3C9E",
"0xbd222f816fe3250fe4792548738eb0fa33ae5c6b",
"0xD68d1d3f6aBc5464e83CD8152e286cd26c7D1501",
"0x079b4185e0d1e3120B5744c3d4E23409656185b6",
"0xA87C52E179f12cF4f5C814B04e05377b258b93BC",
"0x35001051Fc6Ad047B4dB252A6116caB6C16543B2",
"0xD390ea95bD404a148a3AAf768332d14230f9e4cF",
"0x4149cC323395b38b8a23863B7B1a7DAb218264E5",
"0x8fC5b514314C4080B76886d6F10Bc7c4C300E691",
"0xb83De36441ab99D2484759A90874c5fAd61587Eb",
"0x26Ba491EC537780bF88e02b0c601312a6AA92bD1",
"0x55af8f0e78d1f8963c930773295319817138d8f3",
"0x723c2444A2B7a05c09798E7f62711253E0655b69",
"0x6c2214A7E8e01181C867a12710BB77Ac761Ab78a",
"0x436470595e76A5BC50958295494c109251d45f6b",
"0x69e9541Bae37fd07cFfcf4Bb9f1816B0121cdeeC",
"0x6E3EDb79924803e6044704A970406DD3632cAaf9",
"0x9876A5bc27ff511bF5dA8f58c8F93281E5BD1f21",
"0xD4ef913Fb27cDDf868fe457A722360209eD8c064",
"0x8605A130b34a05fA085F338745be8B9bdf2a7766",
"0x3199a5A10aAAf4E42b6A3DD7e3884Fd1502F9D81",
"0xe0c8E0BfE540c98A78CcFbDc0EBFa4B039f6C373",
"0xD4d25DDC76C703523665051061cF0596aB782526",
"0xA151D9Ee0386104603780e96d00fF8C892654FbC",
"0x733b1B0372920ad677Cdf46160E20EAe536f2C0c",
"0x39da40d19C0386A3eFaD5c5CA21880fAfbBa0c49",
"0x6e05c8fD52505DCdBf6d401e7FF21493d3e131F7",
"0xebEEd6e6B19B3839842647c63798cFE74113f6B2",
"0x0a6a3ca03395eb642998371104eafc1938367656",
"0x172058069504fbb3bF16D663222867905238b485",
"0xe67040F8FA916a48498E661D6b1Ac5deD7028a85",
"0x0f66B3dD26d91E054C386b1547a898b48a1623b2",
"0x06F9683BAF8356Ef3853a1fc9cf2FC0B4312096D",
"0x60Ebf5731Aa13794d250ADeb735f1Fa148826653",
"0xa8479255Fb9E379A224126Bf91A481102bd2ff76",
"0x636ebEa9f9860A1Fa8306a126911Aa3B61eEd725",
"0xb14e518205ff080319710dce04f034272b9769a4",
"0x06e24f1CFB560a1ec1C489174d5E1cc1aDBD9c74",
"0xb0f18da4bea7e81091dbe707aba2ddc3194d0dff",
"0x17907a099153Aa9662A9321da5AA24F2AD484dc9",
"0x231eEAA5F65140E15A111419ad3f0e1b41b54295",
"0xCeCAbf76D9fdFa32A2F5089442cF6A33F7bd4E45" ]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Which FEMBOT will you get?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafkreie3gb2nnj23wng5tppxyplamkvdbn6tnjdbapxdidlhfaizmcq5x4"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
