export default function Card(props){
  return (
    <div className="card">
      <div className="prfPicContr">
        <img src={props.image} alt="pokemon image"/>
      </div>
      <h2>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h2>
      {<table>
        <tbody>
          <tr>
            <td>Type</td>
            <td className="types">{props.type.map((element) => <span key={element.type.name}>{element.type.name}</span>)}</td>
          </tr>
          <tr>
            <td>Abilities</td>
            <td className="abilities">{props.abilities.slice(0,2).map((element) => {
              return <span key={element.ability.name}>{element.ability.name}</span>
            })}</td>
          </tr>
        </tbody>
      </table>}

    </div>
  )
}