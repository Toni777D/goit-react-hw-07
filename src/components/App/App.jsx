
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css'
import { useSelector} from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';


export default function App(){

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
);

return(
    <div className={styles.app}>
<h1>Phonebook</h1>
<ContactForm />
<SearchBox />
<ContactList />
</div>

);
};



    
