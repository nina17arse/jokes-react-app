import axios from "axios";
import {useState} from "react";

function Jokes(){
    const [joke,setJoke] = useState("")
    const getJoke = () =>{
        axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
            setJoke("✨"+response.data.setup + "..." + response.data.punchline+"✨")
        })
    }
    return (
        <div>
            <h1 className="font-black m-2 text-4xl">Wanna Hear A Corney Joke ?</h1>
            <div>
                <button className="flex justify-center items-center bg-black hover:bg-blue-400 text-white font-bold py-2 px-4 rounded m-3"
                        onClick={getJoke}>
                    Click Me !!! </button>


            </div>
            <div className="">
                <p className="p-2">{joke}</p>
            </div>
    </div>
    )
}
export default Jokes