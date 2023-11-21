function Footer(){
    const github = "https://github.com/nina17arse"
    const profile ={
        name:"Natnael Wondwoesn"

    };
    return(
        <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center font-bold"><a href={github} target="_blank" rel="noopener noreferrer">Created By {profile.name}</a></footer>
    )
}
export default Footer