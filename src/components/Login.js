import { useState } from "react";

export default function Login(){
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");

    async function login_submit(event){
        event.preventDefault()
        let data = await fetch('/login?include_auth_token',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(user,password),
        })
    }
    function reset(){
        setUser("")
        setPassword("")
      }  

    return(
        <div>
            <h1 style={{ color: 'green', padding: 20,marginLeft:20}} >Kanban Board</h1>
            <div className="card mx-auto" style={{width:370,backgroundColor:'wheat'}}>
                <form onSubmit={login_submit} className="card-body">
                <h5 className="card-header">Login Form</h5><br></br>
                    <div className="card-text mb-3">
                        <label className="form-label">Email id : </label>
                        <input className="form-control"  id="user_name" type="text" onChange={(event)=>setUser(event.target.value)} value={user} placeholder="user name"></input>
                    </div>
                    <div className="card-text mb-3">
                        <label className="form-label">Password : </label>&nbsp;
                        <input className="form-control" type="password" id="password" value={password} onChange={(value)=>setPassword(value.target.value)} placeholder="Password"></input>
                    </div>
                    <div className="card-text mb-3">
                        <button style={{margin : 10}} className="btn btn-success" type="submit">Login</button>&nbsp;
                        <button className="btn btn-primary" type="reset" onClick={reset} >Reset</button>
                    </div>
                </form>
                <router to='/signup' className="card-text text-center mb-3">Not a user ? click here to Signup</router>
            </div>
        </div>
    )
}