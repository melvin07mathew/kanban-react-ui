export default function Navbar(){
    
    return(
        <header>
            <div className="row" style={{backgroundColor:'beige'}}>
                <div className="col" style={{margin:15,marginLeft:30}}>
                    <span style={{fontSize:18,fontFamily:'revert-layer'}}>WELCOME User</span>
                </div>
                <div className="col d-grid gap-2 d-md-flex justify-content-md-end" style={{margin:10,marginRight:30}}>
                    <button className="btn btn-info">EXPORT</button>
                    <button  className="btn btn-success">SUMMARY</button>
                    <button className="btn btn-warning">LOGOUT</button>
                </div>          
            </div>    
        </header>

    )
}