import styles from './ContactList.module.css'
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList(){

    const visibleContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={styles.list}>
           {visibleContacts.map(({id, name, number}) => (
                <Contact key={id} id={id} name={name} number={number}/>   
           ))}
        </ul>
    );
    }