import './GameHeaderStyles.css'
import logo from '../../assets/images/logo.svg'

const GameHeader = () => {
    return (
        <div className="header-container">
            <button>MENU</button>
            <img src={logo} alt="logo" />
            <button>RESTART</button>
        </div>
    )
}

export default GameHeader;