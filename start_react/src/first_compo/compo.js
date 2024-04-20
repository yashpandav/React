import './compo.css';

function Compo(props){
    const compon = props.className;
    return(
        <div>
            <h1 className={compon}>THIS IS A CHILD</h1>
        </div>
    );
}

export default Compo;