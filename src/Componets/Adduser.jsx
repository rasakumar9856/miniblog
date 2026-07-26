import { Component, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Adduser({selectedUser,submitData,users}) {
    const navigate = useNavigate();
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    function Submit(){
      
    if(name && title && comment){
       fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify({
          
          name: name,
          title: title,
          body: comment
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      }).then((response) => response.json())
      .then(data => {
        setName('');
        setTitle('');
        setComment('');
        alert("User added successfully");
        submitData({
          name: name,
          title: title,
          body: comment
        });
        navigate("/"); 
      })
          }
    else{alert("Please fill all the fields");}
  }
  

  useEffect(()=>{
    if(selectedUser){
      setName(selectedUser.name);
      setTitle(selectedUser.title);
      setComment(selectedUser.body);
    }
  })
  return (
    <div className={'adduser'}>
      
        <main>
        <form className={'addusers'}> 
          <h1>{selectedUser ? "Edit" : "Add"} User</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
        <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" placeholder="Comment" />
        </form>
        </main>
        <button onClick={Submit}>Summit</button>
        
      
    </div>
  )
}

export default Adduser;
