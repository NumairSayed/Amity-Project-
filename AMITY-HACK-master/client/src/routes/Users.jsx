import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/user/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
}, [] )
  return (
      <div>
        <Navbar />
        <div class="mx-32 my-24">
            <h1 class="text-4xl font-bold">Users</h1>
            {
                users.map((user, index) => (
                    <>
                    <Link to={`/user/${user._id}`}>
                    <div key={index} class="my-10 py-10 px-5 bg-white/30 rounded-xl">
                        <h2 class="text-2xl font-bold">{user.name}</h2>
                        <p class="text-lg">{user.email}</p> 
                    </div>
                    </Link>
                    </>
                    
                    
                ))
            }
        </div>
        <Footer />
    </div>
  )
}

export default Users