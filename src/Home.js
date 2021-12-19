import Bloglist from "./bloglist";
import useFetch from "./useFetch";


const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isLoading && <div>Loading...</div>}
           {blogs && <Bloglist blogs={blogs} title = "Allblogs"/>}
        </div>
    );
}

export default Home;