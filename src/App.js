import './App.css';

function App() {
  return (
    <main>
      <h1>
        Rs 400 <span>.00</span>
      </h1>

      <form>
        <div>
          <input type='text' placeholder='+200 New Samsung TV'/>
          <input type='datetime-local'/>
        </div>
        
        <div>
          <input type='text' placeholder='description'/>
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
