import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>sorry</h2>
            <p>the page cannot be found</p>
            <Link to ='/'>back to home</Link>
        </div>
     );
}
 
export default NotFound;