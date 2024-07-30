import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Upload from "../components/chat/Upload";
import { useState } from "react";

function Chat() {
    const [image, setImage] = useState(null);
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(false);
    var [prompt, setPrompt] = useState("");
    const [messages, setMessages] = useState([]);
    const [finished, setFinished] = useState(false);
    const [uuhid, setUuhid] = useState(null);

    useEffect(() => {
        if (finished) {
            // make a post request to the server to add request
            fetch("http://localhost:8000/api/request/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: "663444b53be9f652078ece80",
                    conversation: messages,
                }),
            })
                .then((response) => response.json())    
                .then((data) => console.log(data))
                .catch((error) => console.error("Error:", error));
        }

        getUuhid();
    }
    , []);

    const getUuhid = async () => {
        const userid = "663444b53be9f652078ece80";
        const response = await fetch(`http://localhost:8000/api/user/user/${userid}`, 
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        })
        const data = await response.json();
        setUuhid(data.data);
        
        console.log(response)
    }






    // appeed the promt to the messages array whenever the user 
    const handleUpload = async () => {
        setLoading(true);
        const updatedMessages = [...messages, prompt]; // Add the prompt as the last message
        setMessages(updatedMessages);
        const formData = new FormData();
        prompt = prompt + " " + " following are the basic healtcare details about the person " +  uuhid;
        formData.append("image", image);
        formData.append("prompt", prompt);
        try {
            const response = await fetch("http://127.0.0.1:5000/api/nutritionist", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            updatedMessages.push(data.response);
            setMessages(updatedMessages);
            
            setPrompt("");
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }
    // turn the image into a URL
    
return (
    <div>
        <Navbar />
        <div class="mx-32 my-24">
            {image ? null : <Upload setImage={setImage} setShow={setShow}/>}
            {image && (
                <div class="flex justify-center my-10">
                    {console.log(show)}
                    <img src={show} alt="uploaded image" class="w-[400px]" />
                </div>
            )}
            <div class="flex my-10 gap-x-5">
                <input type="text" placeholder="Enter your queries" class="input border border-zinc-100 w-full" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                <button class="btn btn-neutral" onClick={handleUpload} disabled={image == null ? true : false}>Send Mesaage</button>
            </div>

            <div class="my-10 py-10 px-5 bg-white/30 rounded-xl">
                {
                    messages.map((message, index) => (
                        <div key={index} class={`chat ${ index%2 ? "chat-start" : "chat-end"}`}>
                            <div class={`chat-bubble ${ index%2 ? "" : "bg-white/10"}`}>
                                {message}
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="btn btn-success" onClick={(e) =>{setFinished(true)}}>Done</button>
        </div>
        <Footer />
    </div>
);
}

export default Chat;
