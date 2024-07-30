import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyRequest() {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        const userId = "663444b53be9f652078ece80";
        fetch(`http://localhost:8000/api/request/get`)
            .then((response) => response.json())
            .then((data) => setRequests(data.data.filter(request => request.user == userId)))
        console.log(requests)
    },[]
)
  return (
    <div>
        <Navbar />
        <div class="mx-32 my-24">
            <h1 class="text-4xl font-bold">My Request</h1>
            
                {
                    requests.map((request, index) => (
                        
                        <>
                        <div class="my-10 py-10 px-5 bg-white/30 rounded-xl">
                        <h2 class="text-2xl font-bold">Request {index+1}</h2>
                        <div class="text-lg">{request.conversation.map((message, index) => (
                            <h4>
                                {index%2==0 ? "User: " : "Nutritionist AI: "}{message}
                            </h4>

                        ))}</div>
</div>
                        </>
                    ))
                }
            
            
        </div>
        <Footer />
    </div>
  )
}

export default MyRequest