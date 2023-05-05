import logo from './logo.svg';
import './App.css';

function App() {

  let post = '컵라면 순위';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '16px'}}>2Moogi 블로그</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
