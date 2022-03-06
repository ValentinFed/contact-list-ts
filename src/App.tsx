import {useEffect, useState} from "react";
import apiData from "./api";
import PersonInfo from "./components/PersonInfo/PersonInfo";
import Loading from './components/Loading/Loading'
import Error from './components/Error/Error'

interface User {
  "id": string;
  "jobTitle": string;
  "emailAddress": string;
  "firstNameLastName": string;
}

function App() {
  const [data, setData] = useState<User[]>([]);
  const [selected, setSelected] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function FetchUsers() {
      try {
        setLoading(true)
        setError('')

        const result = await apiData();
        setData([...data, ...result]);

        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(`${error}`)
      }
    }
    FetchUsers()
  }, [page])

  const fetchNextBatch = () => {
    setPage(page + 1)
  }

  return (
    <div className="App">
      <div className="selected">Selected contacts: {selected.length}</div>
      <div className="list">
        {data.map((personInfo) => (
          // @ts-ignore
          <PersonInfo key={personInfo.id} data={personInfo} />
        ))}
        {isLoading && <Loading/>}
        {error && <Error error={error}/>}
        <button onClick={() => fetchNextBatch()}> {error ? 'Refetch' : 'Load more' }</button>
      </div>
    </div>
  );
}

export default App;
