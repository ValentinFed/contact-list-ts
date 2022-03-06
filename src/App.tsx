import {useEffect, useState} from "react";
import apiData from "./api";
import PersonInfo from "./Components/PersonInfo/PersonInfo";

interface User {
  "id": string;
  "jobTitle": string;
  "emailAddress": string;
  "firstNameLastName": string;
}

function App() {
  const [data, setData] = useState<User[]>([]);
  const [selected, setSelected] = useState<User[]>([]);

  useEffect(() => {
    async function FetchUsers() {
      try {
        const result = await apiData();
        setData([...data, ...result]);
      } catch (error) {
        console.log(error)
      }
    }
    FetchUsers()
  }, [])

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
