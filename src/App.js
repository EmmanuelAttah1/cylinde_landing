import './App.css';
import MyTimer from './components/countDown';
import NavBar from './components/navbar';
import { Button, Input, Space } from 'antd';

import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("")

  const saveEmail = ()=>{
    if(email.length > 0){
      // JoinWaitList(email)
      // .then(res=>{
      //   console.log("Joined WaitList Successful");
      // })
    }else{
      console.log("Enter a valid email");
    }
  }

  return (
    <div className="App">
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
                <Input placeholder='Your Email...' onInput={(e)=>{
                  setEmail(e.target.value);
                }} />
                <Button type="primary" onClick={saveEmail} style={{height:'45px', backgroundColor:"#274c77"}}>Notify Me</Button>
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
