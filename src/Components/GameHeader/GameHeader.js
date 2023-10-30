import './GameHeaderStyles.css'
import logo from '../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'

const GameHeader = () => {
    const navigate = useNavigate();
    const mainMenuClick  = () => navigate('/')
    return (
        <div className="header-container">
            <button onClick={mainMenuClick}>MENU</button>
            <img src={logo} alt="logo" />
            <button>RESTART</button>
        </div>
    )
}

export default GameHeader;