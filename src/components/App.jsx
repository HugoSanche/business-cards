import Card from "./Card";
import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar";


function createCard(contact){
  return (
    <Card 
    id={contact.id} /*this props is posible to used */
    key={contact.id} /*prop expecial using for REACT.- no is posible to used */
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
    />
  );

}

function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
    <Avatar img="https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/gallery_images/pitt-062614-.jpg" />


  {contacts.map(createCard)}

{/*
    <Card
      name={contacts[0].name}
      img={contacts[0].imgURL}
      tel={contacts[0].phone}
      email={contacts[0].email}
     
    />
  <Card
      name={contacts[1].name}
      img={contacts[1].imgURL}
      tel={contacts[1].phone}
      email={contacts[1].email}
     
    />
  <Card
      name={contacts[2].name}
      img={contacts[2].imgURL}
      tel={contacts[2].phone}
      email={contacts[2].email}
   
    />
*/}
    </div>
  );
}
export default App;
