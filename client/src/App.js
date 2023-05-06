import ListHeaders from './components/ListHeaders';
import { useEffect, useState } from 'react'

const App = () => {
  const userEmail = 'dimitargegov@gmail.com';
  const [ tasks, setTasks ] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      console.error(err);
    }

  }

  useEffect(() => getData, []);

  console.log(tasks);


  return (
    <div className="app">
      <ListHeaders listName={'Priority List'} />
    </div>
  );
}

export default App;
