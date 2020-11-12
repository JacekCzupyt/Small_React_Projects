

function simpleReducer(state = "DefaultValue", action){
    switch(action.type){
        case "AddValue":
            return state.concat([action.payload]);
        case "ResetValue":
            return "DefaultValue";
        default:
            return state;
    }
}

export default simpleReducer;