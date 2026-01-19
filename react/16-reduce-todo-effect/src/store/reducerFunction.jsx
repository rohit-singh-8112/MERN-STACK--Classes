const Newval = (stateVal, actions) =>{
    switch(actions.type){
        case 'ADD':{
        const {id, textValue, dateValue} = actions.payload;
            return [{id, textValue, dateValue}, ...stateVal];
        }
        case 'DELETE':
            return stateVal.filter(todo => actions.payload.elementId !== todo.id );
        case 'LOAD_ALL_ITEM':
            return actions.payload.allItems;
        default:
            return stateVal;
    }
}
export default Newval;