import BigNumber from "bignumber.js";

export const NFT_ADDRESS = "nft_address";

//mainnet address
export const MAIN_MARS_ADDRESS = "0x4a0Cc0876EC16428A4Fa4a7C4c300dE2DB73b75b";
// mainnet address
export const MAIN_NFTSTAKE_ADDRESS = "0x46B04B817C5fe596077481291D72Bc63F2608b3F";

//testnet address
export const TEST_MARS_ADDRESS = "0x5b32F7884cb681e10AfeBE275F052b18E44e0585";
//test address
export const TEST_NFTSTAKE_ADDRESS = "0x7517681C2faF2CEf050a5228a01145c262F9E25a";

export const WALLET_ADDRESS = "wallet_address";
export const NFT_BALANCE = "nft_balance";

export const IS_NFT_CONNECTED = "is_nft_connected";
export const IS_ADMIN = "is_admin";

export const BINANCE_TEST = "https://data-seed-prebsc-1-s1.binance.org:8545/";
export const BINANCE_MAIN = "https://bsc-dataseed.binance.org/";

export const TEST_CHAINID = "0x61";
export const MAIN_CHAINID = "0x38";

export const TEST_ETHCHAINID = "0x4";
export const MAIN_ETHCHAINID = "0x1";

export const ETHEREUM_TEST = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
export const ETHEREUM_MAIN = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

export const OPENSEA_TEST = "https://testnets-api.opensea.io/api/v1/";
export const OPENSEA_MAIN = "https://api.opensea.io/api/v1/";

export const OPENSEA_LINKTEST = "https://testnets.opensea.io/assets/";
export const OPENSEA_LINKMAIN = "https://opensea.io/assets/";

export const NFT_REWARD = "nft_reward";
export const NFT_HARVESTHISTORY = "nft_harvesthistory";
export const NFT_STAKEHISTORY = "nft_stakehistory";

export const WEB3APIKEY = "dQHuqyi1lC78Lz6UodHRsl1KR9ZgvDK0lawdYIqwGoe5rM4okuCn2OVXVxj2oiux";

export const STAKE_BALANCE = "stake_balance";
export const DECIMAL = 18;
export const REWARDPERSEC = "rewardPerSec";
export const SPINNERSHOW = "spinnershow";
export const SPINNERTEXT = "spinnertext";

export const ADMIN_DEPOSIT = "admin_deposit";
export const ADMIN_WITHDRAWL = "admin_withdrawl";

export const ADMIN_INFO = "admin_info";
export const ADMIN_HARVEST_HISTORY = "admin_harvest_history";
export const ADMIN_STAKE_HISTORY = "admin_stake_history";  
export const ADMIN_IS_RUNNING = "admin_is_running";
export const ADMIN_TOTAL_SUPPLY = "admin_total_supply";
export const ADMIN_STAKING_DAYS = "admin_staking_days";


export const FEE_ADDRESS = "fee_address";
export const HARVEST_FEE = "harvest_fee";
export const UNSTAKE_FEE1 = "unstake_fee1";
export const UNSTAKE_FEE2 = "unstake_fee2";
export const UNSTAKE_FEE3 = "unstake_fee3";
export const UNSTAKE_FEE4 = "unstake_fee4";
export const UNSTAKE_FEE5 = "unstake_fee5";

export const ALL_STAKES = "all_stakes";

export function toWEI(number){
    return BigNumber(number).shiftedBy(DECIMAL);
}

export function fromWEI(number){
    return BigNumber(number).shiftedBy(-1 * DECIMAL).toNumber();
}