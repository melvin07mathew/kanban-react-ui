import Cards from "./Cards";

export default function List({data,cards}){
    return(
        <div className="col-sm-3" style={{margin:20}}>
            <div className="card text-center mb-3">
                <div className="card-body">
                    <div className="btn-group">
                        <button className="btn btn dropdown-toggle mb-3" type="button" data-bs-toggle="dropdown">{data.list_title}</button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">Edit</li>
                                <li className="dropdown-item">Delete</li>
                            </ul>
                    </div><br></br>
                    <Cards key={data.list_id} cards={cards} list_id={data.list_id}></Cards>
                </div>
            </div>            
        </div>
    )
}