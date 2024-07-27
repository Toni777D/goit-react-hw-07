import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBox.module.css'
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox(){
    const search = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        dispatch(changeFilter(event.target.value))
    }
return (
<div className={styles.container}>
    <p className={styles.title}>Find contacts by name</p>
    <input className={styles.input} type="text" value={search} onChange={handleOnChange} />
</div>
);
}