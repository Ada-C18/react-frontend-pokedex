
const Pokemon = (props) => {

  /*
    input: array of pokemon types. Converts each type to a "badge" material component with corresponding class name
  */ 
  const typeToComponent = (typeList) =>
  {
   return typeList.map((type) => {return <span className={type.toLowerCase()+" badge"} key={typeList.indexOf(type)}>{type}</span>});
  }
  
  return (
    <li className="collection-item avatar col s12 m6 l4 xl3">
      <img src={props.img} alt="" id={props.id} className="circle"/>
      <span className="title">#{props.id}. {props.name}</span>
      <span className="type">{typeToComponent(props.type)}</span>
      <span className="biometrics">Height: <b>{props.height}</b> Weight: <b>{props.weight}</b></span>
    </li>
  );
};


export default Pokemon;
