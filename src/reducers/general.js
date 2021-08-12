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
        console.log(error)
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