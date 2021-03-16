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
  const [id,setId]           = useState<string>('')
  const [cityId,setCityId]   = useState<string>('')

  const Click = useCallback(()=>{
    if(input !== '')
    {
      setLoading(true)
      appRuntime.send('BuscarCity',{name:input,state:id,persons:[1,4]})
    }
  },[input,id,cityId])

  useEffect(()=>{
    appRuntime.subscribe('BuscarCity',(event,msg)=>{
      console.log(JSON.parse(msg))
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
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',flexDirection:'row',justifyContent:"flex-start",alignItems:'center'}}>
            <label >Nome :</label>
            <input  style={{margin:10}} onChange={(event:any)=>setInput(event.target.value)}></input>
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:"flex-start",alignItems:'center'}}>
            <label >Idade :</label>
            <input  style={{margin:10}} onChange={(event:any)=>setId(event.target.value)}></input>
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:"flex-start",alignItems:'center'}}>
            <label >CityId :</label>
            <input  style={{margin:10}} onChange={(event:any)=>setCityId(event.target.value)}></input>
          </div>
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
