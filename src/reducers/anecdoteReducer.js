import anecdoteService from '../services/anecdotes';

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'ADD_ANECDOTE':
      return [...state, action.data];
    case "ADD_VOTE":
      let id = action.data.id;
      return state.map((anecdote) => 
        anecdote.id !== id ? anecdote : action.data 
      );
    case "INIT_ANECDOTES":
        return action.data  
    default: 
      return state;  
  }
}

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    let newAnecdote = await anecdoteService.createNew(anecdote);
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote 
    })
  }
}

export const initializeAnecdote = (anecdotes) => {
  return async (dispatch) => {
    let anecdotes = await anecdoteService.getAll();
    dispatch( {
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const addVote = (id,votes) => {
  return async (dispatch) => {
    let updatedAnecdote = await anecdoteService.updateVote(id,votes);
    console.log(updatedAnecdote);
    dispatch({
      type: 'ADD_VOTE',
      data: updatedAnecdote
    })
  }
}

export default anecdoteReducer;