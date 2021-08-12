import axios from 'axios';

async function requestLogin(email, password){
    const url = 'http://localhost:3000/auth/login';
    const data = { email, password};
    const headers = { 
        'Content-Type': 'application/json'
    };
    const response = await axios.post(url, data, { headers });
    console.log(response);
}

export default requestLogin;