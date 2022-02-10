import {    
    NFT_CONNECT,
    NFT_DISCONNECT,    
} from '../actions/actionType';

import {
    IS_NFT_CONNECTED,
    WALLET_ADDRESS,
    NFT_BALANCE,
    SPINNERSHOW,
    SPINNERTEXT 
} from '../constants';

const initialState = {
    [IS_NFT_CONNECTED] : false,
    [WALLET_ADDRESS] : "0x0000000000000000000000000000000000000000",    
    [SPINNERSHOW] : false,  
    nftBalance : 0,
    nft_balanceIds : [],
    nft_balanceUris : [],  
}

export default function walletReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case NFT_CONNECT:
            return({
                ...state,
                [IS_NFT_CONNECTED]:true,
                [WALLET_ADDRESS]: action.payload.address,
                [NFT_BALANCE]: action.payload.balance,
                [SPINNERSHOW]:false,
                nftBalance : action.payload.balance,
                nft_balanceIds: action.payload.nft_balanceIds,
                nft_balanceUris : action.payload.nft_balanceUris
            });            
        case NFT_DISCONNECT:
            return({
            ...state,
            [IS_NFT_CONNECTED]:false
            })
        case SPINNERSHOW:
        return({
        ...state,
        [SPINNERSHOW]:action.payload.show,
        [SPINNERTEXT]:action.payload.spinnertext
        })                
        default:          
            return state;
    }
    
}