import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Links from './Links/Links';
import Menu from './menu/Menu';
import Share from './Share_Btn/Share';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Share/>
      <Links/>
      <Footer/>
    </div>
  );
}

export default App;
