
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css'
import { useDispatch, useSelector} from 'react-redux';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';


export default function App(){
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    // const visibleContacts = useSelsector(selectFilteredContacts);


    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    

return(
    <div className={styles.app}>
        <h1>Phonebook</h1>
        <ContactForm />
        {loading && <p>Loading contact ...</p>}
        {error && <p>Error: {error}</p>}
        <SearchBox />
        <ContactList />
    </div>

);
};



    
