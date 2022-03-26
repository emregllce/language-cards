import './App.css';
import {categories} from "./helper/data"
import Card from "./components/card/Card"
import { ReactComponent as ReactIcon } from "./assets/react.svg"
import "./components/card/Card.css"

function App() {
  return (
    <div className='App'>
      <ReactIcon className="appIcon" />
      <div className="container">
        <h2>Languages</h2>
        {categories.map((item, index) => {
          return <Card categories={item} key = {index} />;
        })}
      
      </div>

    </div>
  );
}

export default App;
