import jwt_decode from 'jwt-decode';

let token = localStorage.getItem('token') || false;
let isLoggedIn = token ? true : false;
// let user = isLoggedIn ? jwt_decode(token) : {};
let user;
if (isLoggedIn){
    try {
        user = jwt_decode(token);
    } catch (error){
        user = {};
        isLoggedIn=false;
    }
}

const initState = {
    token,
    isLoggedIn, 
    user,
    list: [],
    loading: false,
    error: false
};

const generalReducer = (state=initState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return ({
                ...state,
                isLoggedIn: true,
                user: action.user,
                token: action.token
            })
        case 'LOGOUT':
            return ({
                ...state,
                isLoggedIn: false,
                user: {},
                token: false
            })
        case 'LOAD_LIST':
            return ({
                ...state,
                list: action.payload,
                error: false
             })
        default:
            return state;
    }
}

export default generalReducer;