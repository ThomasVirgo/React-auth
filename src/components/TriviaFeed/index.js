import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TriviaFeed = () => {

    const [questions, setQuestions] = useState([]);

    useEffect( async ()=>{
        const { data } = await axios.get('https://opentdb.com/api.php?amount=5&category=9&type=multiple');
        console.log(data);
        setQuestions
    }, [])

    return (
        <>
        
        </>
    )
}

export default TriviaFeed;