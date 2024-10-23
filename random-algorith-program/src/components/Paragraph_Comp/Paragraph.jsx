import { useRef } from "react";
import "./Paragraph.css";
import placeholder from "./placeholder.svg";

export default function Paragraph(props) {
  const descBtnRef = useRef(null);
  const codeBtnRef = useRef(null);
  const descTabRef = useRef(null);
  const codeTabRef = useRef(null);

  const switcToDesc = () => {
    descBtnRef.current.classList.add("active");
    codeBtnRef.current.classList.remove("active");

    descTabRef.current.style.display = "flex";
    codeTabRef.current.style.display = "none";
  };

  const switcToCode = () => {
    descBtnRef.current.classList.remove("active");
    codeBtnRef.current.classList.add("active");

    descTabRef.current.style.display = "none";
    codeTabRef.current.style.display = "flex";
  };

  return (
    <div className="paragraph">
      <div className="tab">
        <div className="tab-head">
          <div className="tab-btns">

            <button
              className="desc-tab active"
              id="desc"
              ref={descBtnRef}
              onClick={switcToDesc}
            >
              Description
            </button>
            <button
              className="code-tab"
              id="code"
              ref={codeBtnRef}
              onClick={switcToCode}
            >
              Code
            </button>
          </div>
        </div>

        <div className="tab-desc" ref={descTabRef} style={{ display: "flex" }}>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>

        <div className="tab-code" ref={codeTabRef} style={{ display: "none" }}>
            <pre>
              <code>
                
              </code>
            </pre>
        </div>
      </div>

      <img src={props.source || placeholder} alt="algorithm display" className="alg-display" />
    </div>
  );
}