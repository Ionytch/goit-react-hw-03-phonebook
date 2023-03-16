// import { Component } from "react";

import { ContactsList } from "./Contatcts.styled"

 function Contacts ({names, onDeleteContacts}) {
           return (
            <ContactsList>
                   {
                       names.map(name => (
                           <li key={name.id}>
                               <p>{name.name}:{name.number}</p>
                               
                <button onClick={()=>onDeleteContacts(name.id)}>DELETE</button>
                </li>))}
            </ContactsList>
        )
    
}

export default Contacts
