import axios from 'axios';

async function requestRegister(name, email, password){
    const url = 'http://localhost:3000/auth/register';
    const data = { name, email, password};
    const headers = { 
        'Content-Type': 'application/json'
    };
    const response = await axios.post(url, data, { headers });
    console.log(response);
}

export default requestRegister;