import DateReusableComponent from './DateReusableComponent';
import FormComponent from './FormComponent';
import CardWrapper from './CardWrapper';
import { useState } from 'react';

// function FirstComponent(props){
    const FirstComponent = (props) => {

    const style_var_internal = {padding:'10px 10px', border:'1px solid grey',  color:'orange'};
    const style_var = {padding:'10px 10px', border:'1px solid grey',  color:'cyan'};
    const text1 = 'Dynamic variable';

    // use destructuring 
    const [current_var, updateVar ] = useState("old Value");

    const clickHandler = () => {
        console.log('button clicked !!!');
    }

    const clickUpdatetextHandler = () => {
        updateVar('value Updated !!!')
        console.log('updated !!!');
    }
   
    const onSaveFormHandler = (all_form_data_getting) => {
        const all_form_data_get = {
            ...all_form_data_getting,
            // id : Math.random().toString()
        };

        console.log('Parent file: in first component file');
        console.log(all_form_data_get);
        props.onAddDataViaForm(all_form_data_get)
    };
    

    return(

        // here instead of wrapping with wrapping div, we can use 'cardwrapper' a custom tag component which is used by prop.children
        <CardWrapper> 
            
            <DateReusableComponent></DateReusableComponent>
            <h2><span style={{padding:'10px 10px', border:'1px solid grey',  color:'teal'}}>Inline css</span></h2>
            <h2><span className="ex-css">External css</span></h2>
            <h2><span style={style_var_internal}>Internal css</span></h2>
            <h2><span style={style_var}>{ text1 }</span></h2>
            <h2><span style={style_var}>{'Js function :' + Math.random()}</span></h2>
            <h2><span style={style_var}>{current_var}</span></h2>
            {/* <button onClick={ clickHandler }>Click & check console</button><br/><br/> */}
            <button onClick={ clickUpdatetextHandler }>Click to update text</button>

                <h3>Static list get via props</h3>
                <li>{props.object_values[0].key1}</li>
                <li>{props.object_values[0].key2}</li>
                <li>{props.object_values[1].key1}</li>
                <li>{props.object_values[1].key2}</li>
          

            <h3>Dynamic list access using map function</h3>
            <FormComponent onSaveForm={onSaveFormHandler} ></FormComponent>  
                
                <h5>key 1 list</h5>
                {props.object_values.map( (listing) => (
                     <li>{listing.key1}</li> 
                ))} 

                <h5>key 2 list</h5>
                {props.object_values.map( (listing) => (
                    <li>{listing.key2}</li>     
                ))}   
            
    </CardWrapper>
    );
}

export default FirstComponent;