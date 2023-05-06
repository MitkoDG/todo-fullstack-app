import ListHeaders from './components/ListHeaders';
import { useEffect, useState } from 'react'
import ListItems from './components/ListItems';

const App = () => {
  const userEmail = 'dimitargegov@gmail.com';
  const [tasks, setTasks] = useState(null);
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

  // Sort by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date));


  return (
    <div className="app">
      <ListHeaders listName={'Priority List'} />
      {sortedTasks?.map((task) => <ListItems key={task.id} task={task} />)}
    </div>
  );
}

export default App;
