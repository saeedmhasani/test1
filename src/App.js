import { useState } from 'react';

import './App.css';
import Clock from './components/Clock';

function App() {
  const [date, setDate] = useState(new Date());

const tick=()=>{
  setDate(new Date());
}

  return (
    <div className="App">
      <div className='container'>
        <div className='content'>
         
         <Clock date={date} tick={tick}/> 
          
        </div>
      </div>
    </div>
  );
}

export default App;
