import logo from './logo.svg';
import './App.css';

function App() {
  return (

    
    <div className="wrapper grid col-span-12">
      <header className=''>
          <div >
            <img width={190} height={61} src='/img/logo.svg' />          
            
          </div>
          <div>
          <ul className=' '>
            <li className=' cart'>
              <img width={30} height={17} src='/img/cart.png'  />
             
            </li> 
            <li className=' price'> <span>500 грн</span></li>          
            <li>
              <img width={30} height={30} src='/img/users.png'  />
            </li>
          </ul>
        </div>
        <p>Магазин кращих рюкзаків</p>
      </header>
        <div className='line1'></div>
    </div>
  );
}

export default App;
