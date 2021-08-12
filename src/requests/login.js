import axios from 'axios';

async function requestLogin(email, password){
    const url = 'http://localhost:3000/auth/login';
    const payload = { email, password};
    const headers = { 
        'Content-Type': 'application/json'
    };
    const { data } = await axios.post(url, payload, { headers });
    return data;
}

export default requestLogin;