import logo from './logo.svg';
import ComponentA from './components/ComponentA';
import { ComponentB } from './components/ComponentB';
import DataFromFile from './data';
import ComponentC from './ComponentC';
function App() {
  return (
    <div className="App">
      <h1>hello React</h1>
      {/* <ComponentA />
      <ComponentB />
      <DataFromFile /> */}
      <ComponentC />
    </div>
  );
}

export default App;
