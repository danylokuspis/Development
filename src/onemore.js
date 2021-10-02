import { useState } from "react";
import Bloglist from "./bloglist";

const Onemore = () => {
    const [blogs, setBlogs] = useState([
        { title: "New website", body: "lorem ipsum...", author: "Marko", id:1 },
        { title: "Welcome home", body: "lorem ipsum...", author: "Danylo", id:2 },
        { title: "How to learn Java", body: "lorem ipsum...", author: "Orest", id:3 },
    ]);

    return (
        <div className="onemore">
           <Bloglist blogs={blogs} title = "Allblogs"/>
        </div>
    );
}

export default Onemore;