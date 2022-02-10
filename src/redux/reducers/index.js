import {combineReducers} from "redux";
import nftReducer from "./nftReducer";



export default combineReducers({    
    nft: nftReducer,    
});

