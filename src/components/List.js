import { useEffect, useState } from "react"

export default function List(){
    const [list,setList] = useState([])
    useEffect(()=>{
        const fetch_data = async () => {
            let value= await fetch("http://127.0.0.1:5000/api/kanban_board/list/card/melvin/1")
            if(value.ok){
                let list_data = await value.json()
                setList(list_data)
        }else{
            console.log("failed")
        }
    }
    fetch_data()},[])

    return (
        <div>
            {
            list.map((data)=>(
                // <div className="row">
            <div className="col-sm-3" key={data.card_id}>
                <div className="card text-center mb-3" background-color="rgb(188, 233, 236)">
                    <span>{data.card_id}</span>
                    <span>{data.card_title}</span>
                    <span>{data.content}</span>
                    <span>{data.deadline}</span>
                    <span>{data.status}</span>
                </div>
            </div>
            // </div>
        )
            )
}
            
        </div>
    )
}


