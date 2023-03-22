import { useEffect, useState } from "react"
import List from "./List";
import Navbar from "./Navbar";


export default function Home(){
    const [list,setList] = useState([])
    const [ cards,setcards] = useState([]);

    useEffect(()=>{    
        setList([{"list_id": 1, "list_title": "proto type", "description": "this is a proto type list"}, {"list_id": 2, "list_title": "new list", "description": "kl\r\n"}, {"list_id": 3, "list_title": "sample2", "description": "this list is created as a sample card"}, {"list_id": 8, "list_title": "sample3", "description": "gdfg"}])
        setcards([{"card_id": 10, "card_title": "sample card 1", "content": "sample card for testing", "deadline": "2022-07-07", "status": "COMPLETED", "list_id": 3}, {"card_id": 11, "card_title": "new list card 1", "content": "this is a sample card", "deadline": "2022-07-25", "status": "COMPLETED", "list_id": 2}, {"card_id": 17, "card_title": "proto type card 1", "content": "this is a sample list created to test the application", "deadline": "2022-07-28", "status": "COMPLETED", "list_id": 1}, {"card_id": 19, "card_title": "sample 3 card 1", "content": "cards with cards", "deadline": "2022-08-04", "status": "DEADLINE PASSED", "list_id": 8}, {"card_id": 21, "card_title": "\u0d1f\u0d48\u0d2a\u0d4d\u0d2a\u0d4d", "content": "this is another sample to check multi language", "deadline": "2022-07-15", "status": "COMPLETED", "list_id": 1}, {"card_id": 22, "card_title": "new list card 2", "content": "sample card for testing", "deadline": "2022-08-11", "status": "DEADLINE PASSED", "list_id": 2}, {"card_id": 23, "card_title": "proto type card 2", "content": "this is a sample list created to test the application", "deadline": "2022-08-18", "status": "DEADLINE PASSED", "list_id": 1}, {"card_id": 24, "card_title": "proto type card 3", "content": "this is a sample card to check the functionality of the application", "deadline": "2022-08-13", "status": "DEADLINE PASSED", "list_id": 1}, {"card_id": 25, "card_title": "new list card 3", "content": "this is a sample to test application for errors", "deadline": "2022-08-04", "status": "DEADLINE PASSED", "list_id": 2}, {"card_id": 26, "card_title": "new list card 4", "content": "this is a sample card", "deadline": "2022-09-01", "status": "DEADLINE PASSED", "list_id": 2}, {"card_id": 27, "card_title": "sample card 2", "content": "this is another sample", "deadline": "2022-09-04", "status": "DEADLINE PASSED", "list_id": 3}, {"card_id": 28, "card_title": "sample card 3", "content": "testing the application", "deadline": "2022-09-01", "status": "DEADLINE PASSED", "list_id": 3}, {"card_id": 29, "card_title": "sample card 4", "content": "another example of cards", "deadline": "2022-09-02", "status": "DEADLINE PASSED", "list_id": 8}, {"card_id": 30, "card_title": "sample 3 card 3", "content": "here is a sample card", "deadline": "2022-08-16", "status": "DEADLINE PASSED", "list_id": 8}])
    },[])

    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
            {
                list.map((data)=>(
                    <List key={data.list_id} data={data} cards={cards}></List>
                ))
            }
            </div>
        </div>
    )
}


// cards.map((data)=>(
//     <div className="col-sm-3" key={data.card_id}>
//         <div className="card text-center mb-3" style={{backgroundColor:'hotpink'}}>
//             <span>{data.card_id}</span>
//             <span>{data.card_title}</span>
//             <span>{data.content}</span>
//             <span>{data.deadline}</span>
//             <span>{data.status}</span>
//         </div>
//     </div>