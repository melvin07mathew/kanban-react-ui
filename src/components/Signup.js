import { useState } from "react";



export default function Signup(){
    const[username,setUsername] = useState("");
    const[mail,setMail] = useState("")
    const [password,setPassword]= useState("")
    const [retype,setRetype] = useState("")

    function signup(event){
        event.preventDefault();
    }
    function reset(){
        setMail("")
        setUsername("")
        setPassword("")
        setRetype("")
    }

    return(
        <div>
            <div className="position-absolute top-50 start-50 translate-middle">
                <form  onSubmit={signup}>
                    <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input className="form-control" type="text" value={username} onChange={(event)=>setUsername(event.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={mail} onChange={(event)=>setMail(event.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">re-enter password</label>
                        <input type="password" value={retype} onChange={(event)=>setRetype(event.target.value)} className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <button type="submit" style={{margin:10}} className="btn btn-success">Submit</button>
                        <button type="reset" onClick={reset} className="btn btn-info">Reset</button>
                    </div>

                </form>        
             </div>
            </div>
    )
}