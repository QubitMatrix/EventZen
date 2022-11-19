import { useState } from "react";
var data = require("./MOCK_DATA.json");

export default function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm.full_name);
    // our api to fetch the search result
    document.location=searchTerm.link
  };

  return (
    <div id="ser-mid">
      <h1>Search</h1>
      <span>This page lets you search for an event using its name or its type and navigate to that event.</span><br/>There are nine types of events:racing,entrepreneurship,coding,ideathon,hardware,robotics,datathon,gaming and miscellaneous. Use # to search for events based on type.<br/><br/>
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();
              const type=item.type;
              return (
                searchTerm &&
                ((fullName.startsWith(searchTerm) &&
                fullName !== searchTerm) || (type.startsWith(searchTerm.toLowerCase())))
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
