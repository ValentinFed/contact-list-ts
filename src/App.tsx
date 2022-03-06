import React from "react";
import apiData from "./Api/Api";
import PersonInfo from "./Components/PersonInfo/PersonInfo";

function App() {
  const [data, setData] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  return (
    <div className="App">
      <div className="selected">Selected contacts: {selected.length}</div>
      <div className="list">
        {data.map((personInfo) => (
          // @ts-ignore
          <PersonInfo key={personInfo.id} data={personInfo} />
        ))}
      </div>
    </div>
  );
}

export default App;
