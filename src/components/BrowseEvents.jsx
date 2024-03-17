import React, { useEffect,useState } from "react";
import EventCard from './EvenCard';

const BrowseEvents=()=>{
  const [fData, setData] = useState([]);
  useEffect(()=>{
    fetchData();
  }, [])
  const fetchData = () => {
      fetch('http://localhost:8000/events/')
        .then(response => response.json())
        .then(data => {
            setData(data);
            console.log(data);
            console.log('data:',data);
        })
        .catch(error => console.error('Error fetching data:', error))};

    return(
        <div className="event-container">
          {fData?(fData.map((event,i) => (
                    <EventCard key={i} prop={event} />
                ))):null}
        </div>

    );

}

export default BrowseEvents;