import * as types from './actionTypes';

// 给一个初始的 state
const initialState = {
    token:'',
    userId:null,
    method:'POST',
    host:null,
    url:null,
}

export default (state = initialState, action) => {

    switch (action.type){
        default:
            return state;
    }
}