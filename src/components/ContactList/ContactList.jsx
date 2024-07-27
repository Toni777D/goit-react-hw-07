import styles from './ContactList.module.css'
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList(){
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={styles.list}>
           {visibleContacts.map(({id, name, number}) => (
                <Contact key={id} id={id} name={name} number={number}/>   
           ))}
        </ul>
    );
    }