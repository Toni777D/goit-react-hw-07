import { useDispatch } from 'react-redux';
import styles from './Contact.module.css'
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({name, number, id }){
    const dispatch = useDispatch();

    const handleDelete = () => {
dispatch(deleteContact(id))
    }

    return(
        <div className={styles.item}> 
            <div className={styles.data}>
                <p className={styles.name}>{name}</p>
                <p className={styles.number}>{number}</p>
            </div>
           
            <button className={styles.btn} onClick={handleDelete}>Delete</button>
        </div>
        
    );
}
