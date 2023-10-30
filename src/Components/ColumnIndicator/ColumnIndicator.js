import colMarkerP1 from '../../assets/images/marker-red.svg'
import colMarkerP2 from '../../assets/images/marker-yellow.svg'
import './ColumnIndicatorStyles.css'

const ColumnIndicator = () => {
   
    return(
        <div className="col-indicator-container">
            <img src={colMarkerP1} alt="column marker" />
        </div>
    )
}

export default ColumnIndicator;