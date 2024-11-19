import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");

  const addNewTransaction = (e)=>{
      e.preventDefault();
      const url = process.env.REACT_APP_API_URL + "/transaction";
      console.log(url);
      
      fetch(url, {
        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify({name, description, datetime})
      }).then(response => {
        response.json().then(json => {
          console.log("result : ", json);
        });
      });
  }

  return (
    <main>
      <h1>
        Rs 400 <span>.00</span>
      </h1>

      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input type='text' value={name} onChange={e=>setName(e.target.value)} placeholder='+200 New Samsung TV'/>
          <input type='datetime-local' value={datetime} onChange={e => setDatetime(e.target.value)}/>
        </div>
        
        <div className='description'>
          <input type='text' value={description} onChange={e=> setDescription(e.target.value)} placeholder='description'/>
        </div>

        <button type='submit'>Add new transaction</button>
        
      </form>

      <div className='transactions'>
          <div className='transaction'>
            <div className='left'>
              <div className='name'>New Samsung TV</div>
              <div className='description'>It was time for new TV.</div>
            </div>
            <div className='right'>
              <div className='price red'>-Rs43000</div>
              <div className='datetime'>2023-11-14 10:10</div>
            </div>
          </div>

          <div className='transaction'>
            <div className='left'>
              <div className='name'>Gig job new website</div>
              <div className='description'>It was time for new TV.</div>
            </div>
            <div className='right'>
              <div className='price green'>+Rs13000</div>
              <div className='datetime'>2023-11-14 10:10</div>
            </div>
          </div>

          <div className='transaction'>
            <div className='left'>
              <div className='name'>Iphone</div>
              <div className='description'>It was time for new TV.</div>
            </div>
            <div className='right'>
              <div className='price red'>-Rs73000</div>
              <div className='datetime'>2023-11-14 10:10</div>
            </div>
          </div>

      </div>
    </main>
  );
}

export default App;
