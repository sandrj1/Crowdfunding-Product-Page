import './App.css';
import logo from './images/logo.svg';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import Numbers from './components/Numbers/Numbers';
import About from './components/About/About';

function App() {
    return (
        <div className='app'>
            <header className='app__header'>
                <div className='nav__container'>
                    <img src={logo} alt='' />
                    <Navbar/>
                </div>
            </header>
            <main>
                <div className='main__container'>
                    <Title />
                    <Numbers />
                    <About />
                </div>
            </main>
        </div>
    );
}

export default App;
