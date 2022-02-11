import "../App.css"
import CreoWhite from "../assets/creo-white.png"

const CreoField = ({fieldTitle}) =>{
    return(
        <div className="set-center">
            <span className="font-field font-size">{fieldTitle}</span>
            <div className="creo-field-wrap">
                <div>
                    <img src={CreoWhite} alt=""/>
                </div>
                <div>
                    <span>0.00</span>
                </div>            
            </div>
        </div>
    );
}

export default CreoField;