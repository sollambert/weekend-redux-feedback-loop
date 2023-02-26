import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const review = (state = {}, action) => {
    switch (action.type) {
        case "SET_FEELING":
            return {...state, feeling: action.payload};
        case "SET_UNDERSTANDING":
            return {...state, understanding: action.payload};
        case "SET_SUPPORT":
            return {...state, support: action.payload};
        case "SET_COMMENTS":
            return {...state, comments: action.payload};
        case "CLEAR_REVIEW":
            state = {};
            return state;
    }
    return state;
}

const store = createStore(
    combineReducers({
        review
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
