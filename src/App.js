import './App.css';
import MyTimer from './components/countDown';
import NavBar from './components/navbar';
import { Button, Input, Space, message } from 'antd';

import { useState } from 'react';
import { subscribe } from './api';

function App() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const [messageApi, contextHolder] = message.useMessage();

  const saveEmail = ()=>{
    setLoading(true)
    subscribe(email)
    .then(res=>{
      setLoading(false)
      setEmail("")
      messageApi.open({
          type: 'success',
          content: "You've successfully joined our waitlist",
          duration: 5
      });
    })
    .catch(err=>{
      setLoading(false)
      messageApi.open({
        type: 'error',
        content: err,
        duration: 5
    });
    })
  }

  return (
    <div className="App">
      {contextHolder}
      <NavBar/>
      <div id="my-body">
        <div id="my-body-left">
          <div id="body-left-inner">
            <h1>We are building something awesome</h1>
            <h4>Cylinder; The Smart Cooking Gas Scale. Never Run Out Again</h4>
            <div className='info-text'>
              <ul>
                <li>Real-time Gas Level Monitoring (No More Guesswork!)</li>
                <li>Effortless Refills and Top ups (From Your Phone!)</li>
                <li>Save Money & Avoid Running Out</li>
              </ul>
            </div>
            <div>
              <Space.Compact
                style={{
                  margin:'20px 0px',
                  width: '100%',
                  height:'45px'
                }}
              >
                <Input placeholder='Your Email...' value={email} onInput={(e)=>{
                  setEmail(e.target.value);
                }} />
                <Button type="primary" loading={loading} onClick={saveEmail} style={{height:'45px', backgroundColor:"#274c77"}}>Notify Me</Button>
              </Space.Compact>
            </div>
          </div>
        </div>
        <div id="my-body-right">
          <MyTimer/>
        </div>
      </div>
      <div id="body-right-inner"></div>
      <div id="power">Powered by TrinityX</div>
    </div>
  );
}

export default App;
