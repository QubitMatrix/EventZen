
import JSONDATA from"./MOCK_DATA.json";
import {useState} from'react'
function Search()
{
  const [searchTerm,setSearchTerm]=useState('')
  return(<div id="ser-mid">
  <span>This page lets you search for an event using its name or its type and navigate to that event.</span><br/>There are three types of events:coding,hardware and gaming. Use # to search for events based on type.<br/><br/>
  <input type="text" placeholder="search..." onChange={event=>{setSearchTerm(event.target.value)}}/>  
  {
    JSONDATA.filter((val=>{
    if(searchTerm =="")
    {
      return val
    }
    else if(val.event_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.type.toLowerCase()==(searchTerm.toLowerCase()))
    {
      return val
    }
  })).map((val,key)=>{
    return( 
      <div className="user" key={key}>
      <a href={val.link}>{val.event_name}</a>
      </div>
    )
  })}
  </div>
)
}

export default Search;