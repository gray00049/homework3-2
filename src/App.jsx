import jsonData from './assets/data';
import Listing from './components/Listing';
import './App.css';

function App() {
  const data = jsonData.filter(item => item.state == 'active');

  return (
    <div className="App">
        <Listing items={data} />
    </div>
  )
}

export default App