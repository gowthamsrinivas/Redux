import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';

const AnedoteList = () => {
    const anecdotes = useSelector(({filterText , anecdotes}) => { 
      if(filterText) {
        return anecdotes.filter(anecdote => anecdote.content.indexOf(filterText) > -1); 
      }
      else {
        return anecdotes;
      }
    });
    const dispatch = useDispatch();

    const vote = ({id,votes}) => {
      dispatch(addVote(id,votes));
    }

    return (
        <>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>
        )}
        </>
    )
};

export default AnedoteList;