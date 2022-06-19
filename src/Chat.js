import sendButton from "./images/send-button.png";
import React, {useState, useEffect} from 'react';

function Chat() {
    const [input, setInput] = useState('');
    const [submittedInput, setSubmittedInput] = useState(false);
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        if (submittedInput !== false) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: input })
            };
            fetch('/input', requestOptions)
            .then(response => response.text())
            .then(data => {
                setChatList([...chatList, <div className='card2' key={chatList.length}>{data}</div>]);
                setSubmittedInput(false);
                setInput('');
            })
        }
    }, [submittedInput]);

    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (input !== '') {
            setSubmittedInput(true)
            setChatList([...chatList, <div className='card1' key={chatList.length}>{input}</div>]);
        }
    }

    return (
        <div>
            <div className="chat">{chatList}</div>
            <form onSubmit={submitHandler}>
                <input type='text' className='input' autoFocus={true} value={input} onChange={inputChangeHandler} placeholder='Say something'/>
                <button type='submit'> <img className='send-button' src={sendButton} alt='Send' /></button>
            </form>
        </div>
    )
}

export default Chat;
