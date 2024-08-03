import { useState } from 'react'
import { nanoid } from 'nanoid'
import data from './data.json'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBar from './components/SearchBox/SearchBox'
// import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import './App.css'

function App() {
  
  const [ShowUserList, setShowUserList] = useState(data);
  // const [filterValue, setFilterValue] = useState("");

  const onAddContact = (contact) => {
    const newContact = {
      ...contact, 
      id: nanoid(),
    }
    setShowUserList([ShowUserList, ...newContact]);
    
  }
  // const handleFilter = (event) => {

  //   setFilterValue(event);
  // };
  
  // const [FindName, setFindName] = useState("");
  // const getFindName = (text) => {
  //   setFindName(text);
  // }
  const [inputValue, setInputValue] = useState("");
 

  return (
     <div>
    <h1 className='title'>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
       <div>
      <input type="text" />
      <p>{inputValue}</p>
    </div>
      {/* <SearchBox handleFilter={handleFilter} /> */}
    <ContactList contacts = {ShowUserList} />
  </div>
  )
}

export default App
