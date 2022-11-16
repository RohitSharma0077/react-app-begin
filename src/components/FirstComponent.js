import DateReusableComponent from './DateReusableComponent';
import CardWrapper from './CardWrapper';

function FirstComponent(props){

    const style_var_internal = {padding:'10px 10px', border:'1px solid grey',  color:'orange'};
    const style_var = {padding:'10px 10px', border:'1px solid grey',  color:'cyan'};
    const text1 = 'Dynamic variable';

    return(

        // <div>
        //     <h2><span style={{padding:'10px 10px', border:'1px solid grey',  color:'teal'}}>Inline css</span></h2>
        //     <h2><span className="ex-css">External css</span></h2>
        //     <h2><span style={style_var_internal}>Internal css</span></h2>
        //     <h2><span style={style_var}>{ text1 }</span></h2>
        //     <h2><span style={style_var}>{'Js function :' + Math.random()}</span></h2>
        //     <h2><span style={style_var}>{props.key1}</span></h2>
        //     <h2><span style={style_var}>{props.key2}</span></h2>
        //     <h2><span style={style_var}>{props.key3}</span></h2>
        //     <DateReusableComponent></DateReusableComponent>
        // </div>

        // here cardwrapper is custom tag component which is used as prop.children
        <CardWrapper>   
        <h2><span style={{padding:'10px 10px', border:'1px solid grey',  color:'teal'}}>Inline css</span></h2>
        <h2><span className="ex-css">External css</span></h2>
        <h2><span style={style_var_internal}>Internal css</span></h2>
        <h2><span style={style_var}>{ text1 }</span></h2>
        <h2><span style={style_var}>{'Js function :' + Math.random()}</span></h2>
        <h2><span style={style_var}>{props.key1}</span></h2>
        <h2><span style={style_var}>{props.key2}</span></h2>
        <h2><span style={style_var}>{props.key3}</span></h2>
        <DateReusableComponent></DateReusableComponent>
    </CardWrapper>
    );
}

export default FirstComponent;