import './App.css';
import Title from './components/Title';
import Header from './components/Header';
import Button from './components/Button';
import headerImage from './img/header-img.png';
import { BsFillSendFill } from "react-icons/bs";

function App() {
    const hi = () => {
        window.alert("hi");
    };

    return (
        <div className="App">
            <Header>
                <Title text={"Learning React"} classes={"header-title fs-xxl"} />
                <p className="header-text mb-3">
                    See how experienced developers solve problems in real-time.
                    Watching scripted tutorials is great,
                    but understanding how developers think is invaluable.
                </p>
                <div className='header-btn'>
                    <Button
                        classes='btn-primary text-light'
                        text={"Try it for free 30 Days"}
                        type={"button"}
                        onClick={hi}
                        icon={<BsFillSendFill className='mr-1' />}
                    />
                    <Button
                        classes='btn-secondary'
                        text={"Learn more"}
                        type={"button"}
                        onClick={hi}
                        icon={<BsFillSendFill className='mr-1' />}
                    />

                </div>
                <img src={headerImage} alt='header image' className='header-img' />
            </Header>
        </div>
    );
}

export default App;
