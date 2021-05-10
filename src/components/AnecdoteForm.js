import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { notifyUser } from '../reducers/notificationReducer';

const AnedoteForm = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault();
        let content =  event.target.anecdote.value;
        event.target.anecdote.value = '';
        props.createAnecdote(content);
        props.notifyUser('');
        props.notifyUser(content);
    }

    return (
        <>
        <h2>create new</h2>
        <form onSubmit={ addAnecdote }> 
            <div><input type="text" name="anecdote"/></div>
            <button>create</button>
        </form>
        </>
    );
};

const mapDispatchToProps = {
    notifyUser,
    createAnecdote
}

export default connect(null,mapDispatchToProps)(AnedoteForm);