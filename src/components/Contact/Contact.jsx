import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from './Contact.module.css'
const Contact = ({name, number}) => {
    return (
        <>
            <div className={css.text}>
                <p><FaUser /><span>  {name}</span></p>
                <p><BsFillTelephoneFill /><span>  {number}</span></p>
            </div>
            
            <button type="button" className={css.button}>Delete</button>
        </>
    )
}
export default Contact