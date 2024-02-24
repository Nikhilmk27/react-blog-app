import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[author,setAuthor] = useState('')
    const[isPending,setIsPending] = useState(false)
    const history = useHistory()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,body,author}
        setIsPending(true)
        fetch('http://localhost:8000/blogs',{
            method:'post',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog addede')
            setIsPending(false)
        })
        history.push('/')
    }   
    return ( 
        <div className="create">
            <h1>Add A New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>blog title</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>blog body</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>blog author</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >

                    <option value="nikhil">nikhil</option>
                    <option value="nidhin">nidhin</option>
                </select>
                {!isPending && <button>add blog</button>}
                {isPending && <button disabled>adding...</button>}

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>

        </div>
     );
}
 
export default Create;