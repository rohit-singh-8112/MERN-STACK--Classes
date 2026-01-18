const Newval = (stateVal, actions) =>{
    switch(actions.type){
        case 'ADD':{
        const id = actions.payload.id;
        const textValue = actions.payload.textValue;
        const dateValue = actions.payload.dateValue;
            return [{id,todoText:textValue,todoDate:dateValue}, ...stateVal];
        }
        case 'DELETE':
            return stateVal.filter(todo => actions.payload.elementId !== todo.id );
        default:
            return stateVal;
    }
}
export default Newval;