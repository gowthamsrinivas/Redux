  
  const initialState = '';
  
  const filterReducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch(action.type) {
      case 'FILTER_DATA':
        return action.searchText;
      default: 
        return state;  
    }
  }
  
  export const filterData = (searchText) => {
    return  {
      type: 'FILTER_DATA',
      searchText
    }
  }
  
  export default filterReducer;