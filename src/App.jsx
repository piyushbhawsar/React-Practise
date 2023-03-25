import React from "react"
import Data from "./components/Data"
import Tours from "./components/Tours"

export default function App() {
  
  const [allTours,setAllTours] = React.useState(Data)
  function removeHandler(id) {
    const remainingTours = allTours.filter(tour => tour.id!==id)
    setAllTours(prevState => remainingTours)
  }

  if(allTours.length === 0) {
    return (
      <div className="text-center text-3xl font-bold mt-[100px]">
        <h2>NO MORE TRIPS LEFT OPPA</h2>
        <button 
          className="bg-[blue] mt-[100px]  "
          onClick={() => setAllTours(Data)}
        >
          REFRESHH ...?
        </button>
      </div>
    )
  }
  return(
    <div 
      className="text-2xl "
    >
      <h2 className="text-center text-3xl font-bold ">Trip Planner </h2>
      <Tours 
        className="flex flex-col "
        allTours={allTours} 
        removeHandler={removeHandler}
      />
    </div>
  ) 
}
