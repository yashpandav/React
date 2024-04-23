

export default function Compo(props){
    function increse(){
        props.increase(props.total);
    }

    function decrese(){
        props.decrease(props.total);
    }
    return(
      <div id='container'>
      <button type='button' onClick={decrese}>-</button>
      <div>
        <h3>{props.total}</h3>
      </div>
      <button type='button' onClick={increse}>+</button>
    </div>
    );
}