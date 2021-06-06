import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function App() {
  return (
    <div className="app">
    <Header/>
    <div className="app__body">
    <Sidebar/>
    <Feed />
    <Widget/>
    

    </div>
    {/*widgets*/} 

     </div>
  );
}

export default App;
