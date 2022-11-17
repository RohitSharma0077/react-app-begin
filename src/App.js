import './App.css';
import { useState } from 'react';

import FirstComponent from './components/FirstComponent';

const val_pass_to_other_component = [
  { key1: 'Key1 value pass via prop from other component', key2: 'key2 value pass via prop from other component' },
  { key1: 'key1 value via prop from other component', key2: 'key2 value pass via prop from other component' },

];

function App() {

  // use destructuring 
  const [current_list, listAfterAddingnewViaForm ] = useState(val_pass_to_other_component);

  const addDataViaFormHandler = (all_form_data_getting) => {
    listAfterAddingnewViaForm([all_form_data_getting, ...current_list]);   // combining form array values via ...(spread operator) 
    // or
    // listAfterAddingnewViaForm((prevVal) => {
    //     return [all_form_data_getting, ...prevVal];
    // });

    console.log('In app.js file');
    console.log(current_list);

  };



  return (
    <div className="App">
      <h1>Lets get start</h1>
      {/* <FirstComponent 
        key1= { val_pass_to_other_component[0].key1}
        key2= { val_pass_to_other_component[0].key2}
        key3= { val_pass_to_other_component[1].key3}>
      </FirstComponent> */}

      <FirstComponent 
        object_values= { current_list} onAddDataViaForm={addDataViaFormHandler}>
      </FirstComponent>
    </div>
  );
}

export default App;
