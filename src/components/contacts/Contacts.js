// import { Component } from "react";

 function Contacts ({names, onDeleteContacts}) {
           return (
            <ul>
                   {
                       names.map(name => (
                           <li key={name.id}>
                               <p>{name.name}:{name.number}</p>
                               
                <button onClick={()=>onDeleteContacts(name.id)}>DELETE</button>
                </li>))}
            </ul>
        )
    
}

export default Contacts
