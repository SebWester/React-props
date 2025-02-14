import React from 'react'
import './App.css'
import Heading from './components/Heading'
import Card from './components/Card'
import contacts from './components/contacts'

function createCard(contact) {
  return <Card 
  name={contact.name}  
  img={contact.imgURL}
  phone={contact.phone}
  email={contact.email}
  />
}

function App() {
  return (
  <div>
    <Heading />
    {contacts.map(createCard)}

    {/* Using .map() instead */}
    
    {/* <Card
      name={contacts[0].name}
      img={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email}
     />

    <Card
      name={contacts[1].name}
      img={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email}
     />

    <Card
      name={contacts[2].name}
      img={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email}
     /> */}
  </div>
  )
 
}

export default App
