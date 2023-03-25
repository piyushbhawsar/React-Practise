import React from "react"
import Cards from "./Cards"

export default function Tours( {allTours , removeHandler} ) { 
    const toursElement = allTours.map(singleTour => 
        <Cards 
            key={singleTour.id}
            {...singleTour}
            removeHandler={removeHandler}
        />
    )
    return (
        <div className="flex items-center gap-[20px] max-w-[1300px] mx-[10px] ">
            {toursElement}
        </div>
    )
}