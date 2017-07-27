import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// REDUCER
function userReducer(state, action) {
    switch (action.type) {
        case 'GET_USER':
            return;
            break;
        default:
            return state;
    }
}

// STORE
const store = createStore(userReducer, applyMiddleware(logger(), thunk));
const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const genderElement = document.getElementById('gender');
const statusElement = document.getElementById('status');

function render() {
    const state = store.getState();
    nameElement.innerHTML = state.user.name;
    emailElement.innerHTML = state.user.email;
    genderElement.innerHTML = state.user.gender;
    statusElement.innerHTML = state.status;
    statusElement.className = state.statusClass;
}

// render();
// store.subscribe(render);

// ACTIONS
document.getElementById('getUser')
    .addEventListener('click', function() {
        store.dispatch(dispatch => {
            // ASYNC ACTION
            // dispatch action
            dispatch({type: 'GET_USER'});
            // do the xhr request
            // handle response
            // success
            // error
            dispatch({type: 'RECEIVED_USER'});
        })
    });