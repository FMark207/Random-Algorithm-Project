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
      <div className='cards' id="cards">
        <h1>Choose An Algorithm.</h1>
        <div className="cards-holder">
            <Card title="Integer Sort" 
            description="Sorting integers arranges them in order, aiding efficient data processing."/>
            <Card title="String Sort"
            description="String sorting organizes text data alphabetically for easier searching and retrieval."/>
            <Card title="Q. Integer Sort"
            description="Quick sort efficiently arranges integers using a pivot for fast sorting performance."/>
            <Card title="Q. String Sort"
            description="Quick sort organizes strings using a pivot for efficient alphabetical order."/>
        </div>
      </div>
    )
  }
  