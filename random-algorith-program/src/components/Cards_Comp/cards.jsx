import "./cards.css"
import "https://kit.fontawesome.com/3b31cb99f3.js"

function Card(props) {
    return(
        <div className="card">
            <i className="fa-solid fa-chart-simple"></i>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}


export default function Cards() {
    return(
      <div className='cards'>
        <h1>Choose An Algorithm.</h1>
        <div className="cards-holder">
            <Card title="Algorithm #1" 
            description="A Compact Description About The Following Sorting Algorithm. This Is A Replacable Text, Only Temporary"/>
            <Card title="Algorithm #2"
            description="A Compact Description About The Following Sorting Algorithm. This Is A Replacable Text, Only Temporary"/>
            <Card title="Algorithm #3"
            description="A Compact Description About The Following Sorting Algorithm. This Is A Replacable Text, Only Temporary"/>
        </div>
      </div>
    )
  }
  