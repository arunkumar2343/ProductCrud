export const productDataReducer = (state=null,action)=>{
    if(action.type==="PRODUCTDATA_ACTION")
        return action.payload;
    return state;
};