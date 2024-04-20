import './secondcompo.css'

function Sec_Comp(props){
    const compon = props.className; 
    return(
        <div>
            <h1 className={compon}>THIS IS A PARENT COMPONENETS</h1>
            {props.children}
        </div>
    );
}

export default Sec_Comp;