

const DateReusableComponent = () => {

    const month = new Date().toLocaleDateString('en-US', {month: 'long'});
    const day = new Date().toLocaleDateString('en-US', {day: '2-digit'});
    const year = new Date().getFullYear();

    return(
        <h2><span>{'Today Date: '} {month}-{day}-{year}</span></h2>
    );



}

export default DateReusableComponent;