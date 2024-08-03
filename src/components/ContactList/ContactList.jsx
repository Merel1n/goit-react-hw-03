import css from './ContactList.module.css'
import Contact from "../Contact/Contact";

const ContactList = ({contacts}) => {
    return (
        <ul className={css.list}>{contacts.map((contact) => (
            <li key={contact.id} className={css.item}>
                <Contact name={contact.name} number={contact.number} />
            </li>))}
        </ul>  
    )
 }
export default ContactList