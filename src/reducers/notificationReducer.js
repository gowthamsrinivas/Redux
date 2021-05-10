  
  const initialState = '';
  
  const notificationReducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch(action.type) {
      case 'DISPLAY_NOTIFICATION':
        return action.message;
      default: 
        return state;  
    }
  }
  
  export const notifyUser = (message) => {
    return  {
      type: 'DISPLAY_NOTIFICATION',
      message
    }
  }
  
  export default notificationReducer;