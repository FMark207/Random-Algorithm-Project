import "./Paragraph.css"
import placeholder from "./placeholder.svg"

export default function Paragraph(props) {
    return(
      <div className='paragraph'>
        <div className='paragraph-text'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
        <img src={props.source} className="alg-display"/>
        
      </div>
    )
  }
