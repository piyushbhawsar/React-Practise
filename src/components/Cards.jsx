import React from "react"

export default function Cards( {id,name,image,info,price , removeHandler}) {

    const [readMore, setReadMore] = React.useState(false)
    const Description = readMore ?
                        info : 
                       `${info.substring(0,50)}...` 
    function readMoreHandler() {
        setReadMore(!readMore)
    }
    
    return (
        <div card>
            Name:{name}  
            <img src={image} width="400px" height="max-content"/>
            <div className="text-[12px]">
                {Description}
                <span className="text-[blue]" onClick={readMoreHandler} >{readMore ? "Show Less":"Read More"}</span><br/>
            Price : {price }
            </div>
            <div className="text-[blue] ">
                <button onClick={()=> removeHandler(id)}>Not Interested</button>
            </div><br/>
        </div>
    )
}