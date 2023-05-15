import ListHeaders from './components/ListHeaders';
import ListItems from './components/ListItems';
import { useEffect, useState } from 'react'

const App = () => {
  const userEmail = 'ddg@test.com';
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`);
      const data = await response.json();
      console.log(data);
      setTasks(data);
    } catch (err) {
      console.error(err + 'App.js');
    }
  }

  useEffect(() => getData, []);

  console.log(tasks + ' task list');

  // Sort by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date));


  return (
    <div className="app">
      <ListHeaders listName={'Priority List'} getData={getData} />
      {sortedTasks?.map((task) => <ListItems key={task.id} task={task} getData={getData}/>)}
    </div>
  );
}

export default App;
