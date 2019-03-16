const initialState = {
  Details: [],
  name: null,
  number:null,
  Counter:0
}

const reducer = (state=initialState,action) => {
  if(action.type==='ADDED'){
    console.log('ADD IT '+action.name);
    const obj = {Myname:action.name, Mynumber: action.number}

    return{
      Details:[...state.Details,obj],
      Counter:state.Counter+1
    }
  }
  if(action.type === 'DELETE')
  {
    console.log('DELETE '+action.index);
    state.Details.splice(action.index,1);
    console.log(state.Details);
    return{
      Details:[...state.Details],
      Counter:state.Counter+1
    }
  }
  return state;
};

export default reducer;
