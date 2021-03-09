import React, { useCallback, useEffect, useState }      from 'react';
import logo             from './assets/logo.png';
import appRuntime       from './appRunTime';
import Button           from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';

const App:React.FC = () => {
  const [message,setMessage] = useState<string>('')
  const [input,setInput]     = useState<string>('')
  const [loading,setLoading] = useState<boolean>(false)

  const Click = useCallback(()=>{
    if(input !== '')
    {
      setLoading(true)
      appRuntime.send('ChannelDeExemplo',{nome:input})
    }
  },[input])

  useEffect(()=>{
    appRuntime.subscribe('ChannelDeExemplo',(event,msg)=>{
      setMessage(msg)
      setLoading(false)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Bem Vindo ao Reactron
        </h2>
        <div>
          <label>Escreva seu nome :</label>
          <input style={{margin:10}} onChange={(event:any)=>setInput(event.target.value)}></input>
        </div>
        <Button variant="contained" color="primary" style={{margin:10}} onClick={Click}>Salvar no Backend</Button>
        {(message !== '' && !loading) &&
          <h5>{message}</h5>
        }
        {loading &&
          <CircularProgress style={{margin:10}}/>
        }
      </header>
    </div>
  );
}

export default App;
