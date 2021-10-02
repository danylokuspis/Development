import { useState } from "react";

const Home = () => {
    //let name = "Marko";
    const [name, setName] = useState("Marko")
    const [age, setAge] = useState(27)

    const handleClick = () => {
        setName("Danylo");
        setAge(23);
        
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;