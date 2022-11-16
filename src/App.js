import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';

function App() {

  const val_pass_to_other_component = [
    { key1: 'Key1 value pass via prop from other component', key2: 'key2 value pass via prop from other component' },
    { key3: 'key3 value via prop from other component' },

  ];

  return (
    <div className="App">
      <h1>Lets get start</h1>
      <FirstComponent 
        key1= { val_pass_to_other_component[0].key1}
        key2= { val_pass_to_other_component[0].key2}
        key3= { val_pass_to_other_component[1].key3}>
      </FirstComponent>
    </div>
  );
}

export default App;
