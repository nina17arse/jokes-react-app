import Jokes from "./components/Jokes/Jokes";
import Footer from "./components/Footer/Footer";



function App(){
 return(
     <div>
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
    <Jokes/>
    </div>
         <Footer/>
     </div>
 )
}
export default App
