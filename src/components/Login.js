import { useState } from "react";

export default function Login(){
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");

    function login_submit(event){
        event.preventDefault()
        console.log(user,password)

}
    return(
        <div style={{backgroundColor:'burlywood'}} >
            <h1 style={{ color: 'green', padding: 20,marginLeft:20}} >Kanban Board</h1>
            <div className="position-absolute top-50 start-50 translate-middle">
                <form onSubmit={login_submit}>
                    <div className="mb-3">
                        <label className="form-label">User Name : </label>
                        <input className="form-control"  id="user_name" type="text" onChange={(event)=>setUser(event.target.value)} value={user} placeholder="user name"></input>
                        <label className="form-label">Password : </label>&nbsp;
                        <input className="form-control" type="password" id="password" value={password} onChange={(value)=>setPassword(value.target.value)} placeholder="Password"></input>
                        <button style={{margin : 10}} className="btn btn-success" type="submit">Login</button>&nbsp;
                        <button className="btn btn-primary" type="reset" >Reset</button>
                    </div>
                </form>
                <router to='/signup' className="mb-3">Not a user ? click here to Signup</router>
            </div>
        </div>
    )
}