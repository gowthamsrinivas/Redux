import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import anecoteReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
    anecdotes: anecoteReducer,
    message: notificationReducer,
    filterText: filterReducer
});

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

