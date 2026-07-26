import { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Adduser from './Adduser';

function Components() {

  const [allData, setAllData] = useState([])
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {setAllData(json); setUsers(json.filter((item=> item.userId === 1)))})
  }, [])

  return (<>
    <button onClick={() => setShowForm(!showForm)}>
      {showForm ? "Hide Form" : "Add User"}
    </button>

    {showForm && <Adduser selectedUser={selectedUser} submitData={(newUser) => {
      setUsers([...users, newUser]);
    }} />}
    <div className='nave'>
      <div>Mini Blog Project</div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>
      {/* <Link to="/adduser"><button>Add User</button></Link> */}

    </div>
    <table className='list'>
      <thead>
        <tr>
          <th>ID</th>
          <th>AutherName</th>
          <th>Title</th>
          <th>Commads</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name ? user.name: "william shakespeare"}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
            <td>
              <button onClick={() => { setSelectedUser(user); setShowForm(true) }} style={{ background: "blue", color: "white" }}>
                Update
              </button>
              <button onClick={() => {
                setUsers(users.filter((item) => item.id !== user.id))
              }} style={{ background: "red", color: "white" }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Pagination */}

    <div className="pagination" >
      <button onClick={() => {
        setUsers(allData.filter((item) => item.userId === 1))
      }}>1</button>
      <button onClick={() => {
        setUsers(allData.filter((item) => item.userId === 2))
      }}>2</button>
      <button onClick={() => {
        setUsers(allData.filter((item) => item.userId === 3))
      }}>3</button>
      <button onClick={() => {
        setUsers(allData.filter((item) => item.userId === 4))
      }}>4</button>
      <button onClick={() => {
        setUsers(allData.filter((item) => item.userId === 5))
      }}>5</button>
      <button onClick={() => {
        setUsers(allData.filter((item) => item.userId === 6))
      }}>6</button>
      <button onClick={() => {
        setUsers(allData.filter((item) => item.userId === 7))
      }}>7</button>
      <button onClick={() => {
        setUsers(allData.filter((item) => item.userId === 8))
      }}>8</button>
      <button onClick={() => {
        setUsers(allData.filter((item) => item.userId === 9))
      }}>9</button>
      <button onClick={() => {
        setUsers(allData.filter((item) => item.userId === 10))
      }}>10</button>
      
    </div>


  </>)
}
export default Components;