import './compo.css';

function Compo(props){
    const compon = props.name;
    return(
        <h1>{compon}</h1>
    );
}

export default Compo;