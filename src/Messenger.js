import React from 'react'
import Message from './Message';

let Messenger = () => {
  return (
    <div>
        <h1>Message</h1>
        <Message msg="Message 1"/> <br />
        <Message msg="How are you?"/> <br />
        <Message msg="This is React message"/> <br />
    </div>
  )
}

export default Messenger;