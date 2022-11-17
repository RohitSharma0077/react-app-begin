import { useState } from 'react';
const FormComponent = (props) => {

    // use destructuring 
    const [Current_fname_val, updateFnameField ] = useState('');
    const [Current_lname_val, updateLnameField ] = useState('');

    // or instead of creating different use states, use only one
    // const [userInput, setuserInput ] = useState({
    //     Current_fname_val: '',
    //     Current_lname_val : ''   
    // });


    const inputFnameChange = (event) => {
       
        updateFnameField(event.target.value);

         // use spreading operator to copy/hold the previous state values
        //  setuserInput({
        //     ...userInput,
        //     Current_fname_val:event.target.value,
        // });
        // or we can define like this also 
        //  setuserInput((prev_stat) => {
        //         return { ...prev_stat,  Current_fname_val:event.target.value  }
        //  }); 
       
    }

    const inputLnameChange = (event) => {
        updateLnameField(event.target.value);

         // use spreading operator to copy/hold the previous state values
        //  setuserInput({
        //     ...userInput,
        //     Current_lname_val:event.target.value,
        // });

         // or we can define like this also 
    //      setuserInput((prev_stat) => {
    //         return { ...prev_stat,  Current_lname_val:event.target.value  }
    //  });
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const all_form_data_build_pass ={
            key1: Current_fname_val,
            key2: Current_lname_val,
        }


        console.log('Current/child file: in form component file');
        // child to parent chain: link up chain
        console.log(all_form_data_build_pass);
        props.onSaveForm(all_form_data_build_pass);

        // reset the form after submit all fields : two way binding 
        updateFnameField('');
        updateLnameField('');
    }

return(
      
        <div style={{background:"grey"}}>
             <form onSubmit={formSubmitHandler}>
                <label htmlFor="fname">First name:</label><br/>
                <input required type="text" value={Current_fname_val} className="fname" onChange={inputFnameChange}/><br/><br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input required type="text" value={Current_lname_val} className="lname" onChange={inputLnameChange}/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
      
      
);
}

export default FormComponent;