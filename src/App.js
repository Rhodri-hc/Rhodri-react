import About from './views/about/About';
import './App.css';

function App() {
  return (
    <div>
      <div className='about'>
        <About  />
      </div>
      <footer className='footer'>
        <center className='footer-creater'>
          <span className='footer-creater-left'>Crafted with</span>
          <i className='footer-heart'></i> 
          <span className='footer-creater-right'>by Rhodri</span>
        </center>
      </footer>
    </div>
    
  );
}

export default App;
