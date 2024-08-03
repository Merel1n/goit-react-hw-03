import css from './SearchBox.module.css'

const SearchBox = (handleFilter) => {
    return (
        <div className={css.container}>
                <p className={css.label}>Find contacts by name</p>
                <input className={css.input} type="text" name='findName' onChange={handleFilter} />
        </div>
    )
 }
export default SearchBox


