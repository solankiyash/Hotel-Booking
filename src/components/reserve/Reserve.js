import { faCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../Context/SearchContext'

function Reserve({setOpen,hotelId}) {
  const {data,loading,error} = useFetch(`http://localhost:8000/api/hotels/room/${hotelId}`)
  const [selectedRooms,setSelectedRooms] = useState([])

  const {dates} = useContext(SearchContext)


  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
const alldates = getDatesInRange(dates[0].startDate,dates[0].endDate)

const isAvailable = (roomNumber) => {
  const isFound = roomNumber.unavailableDates.some()
}

const handelSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(checked ? [...selectedRooms,value]:selectedRooms.filter((i)=> i !== value))
  }
  const handelClcik = () => {
    
  }
  return (
    <div className='reserve'>
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={()=>setOpen(false)}/>
        </div>
        <span>Select your rooms:</span>
        {
          data.map((item)=>(
            <div className="rItem">
                <div className='rItemInfo'>
                  <div className='rTitle'>{item.title}</div>
                  <div className='rDesc'>{item.desc}</div>
                  <div className='rMax' >Max people:<b>{item.maxPeople}</b></div>
                  <div className='rPrice' >{item.price}</div>
                  {item.roomNumbers.map((rnumbers)=>(
                    <div className="room">
                      <label>{rnumbers.number}</label>
                      <input value={rnumbers._id} onChange={handelSelect} type='checkbox'/>
                      </div>
                  ))}
                  <button onClick={handelClcik}>Reserve Now!</button>
                  </div>
              </div>
          ))
        }
    </div>
  )
}

export default Reserve
