import React, { useEffect, useRef } from "react";

function GistEmbed({ gistId }) {
  const gistRef = useRef();

  useEffect(() => {
    const gistScript = document.createElement("script");
    gistScript.src = `https://gist.github.com/${gistId}.js`;
    gistScript.async = true;
    gistRef.current.innerHTML = ""; // Clear any existing content
    gistRef.current.appendChild(gistScript);
  }, [gistId]);

  return <div ref={gistRef}></div>;
}

export default GistEmbed;