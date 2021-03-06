import './App.css';
import { zodiac } from './data.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import './App.css';




function App() {
  return (
    <div className="app">
      {/* import and use the Header. Main, and Footer components here */}
      <Header name ='jenna' />  
      <Main zodiacs= {zodiac} />
      <Footer year='2022' />
      {/* the Header component needs a string passed in as the `name` prop */}
      {/* the Footer component needs a year passed in as the `year` prop */}
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  );
}

export default App;
