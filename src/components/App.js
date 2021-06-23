import React, { useState, useEffect } from "react";
import HeatMap from "./HeatMap.jsx";

function App() {
  // states
  const [covidData, setCovidData] = useState([]);

  // Fetch COVID data
  // useEffect(async () => {
  //   await fetch("https://www.covid19tracker.kuundev.com/api/all/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("***** Response from API *****");
  //       console.log(data);
  //       console.log("***** END for Response from API *****");

  //       setCovidData(data);
  //     });
  // });

  return (
    <div>
      <HeatMap></HeatMap>
    </div>
  );
}

export default App;
