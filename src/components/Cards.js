import React from "react"
export default function Cards({cards,list_id}){
    return(
        <>
           {cards.filter((card)=>(card.list_id === list_id)).map((card)=>(
            <div className="card text-center mb-3">
                <div className="card-body">
                <p className="card-text">{card.card_title}</p>
                <p className="card-text">{card.content}</p>
                <p className="card-text">{card.deadline}</p>
                <p className="card-text">{card.status}</p>
                </div>
                </div>
            
        ))}
        </>
    )
}




