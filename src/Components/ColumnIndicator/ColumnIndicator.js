import colMarkerP1 from '../../assets/images/marker-red.svg'
import colMarkerP2 from '../../assets/images/marker-yellow.svg'
import './ColumnIndicatorStyles.css'

const ColumnIndicator = ({position}) => {
   
    const horizontalPosition = {
        left: `${position.x}px`
    }
    return(
        <div className="col-indicator-container" style={horizontalPosition}>
            <img src={colMarkerP1} alt="column marker" />
        </div>
    )
}

export default ColumnIndicator;