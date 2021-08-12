import axios from 'axios';

async function requestRegister(name, email, password){
    const url = 'http://localhost:3000/auth/register';
    const payload = { name, email, password};
    const headers = { 
        'Content-Type': 'application/json'
    };
    const { data } = await axios.post(url, payload, { headers });
    return data;
}

export default requestRegister;