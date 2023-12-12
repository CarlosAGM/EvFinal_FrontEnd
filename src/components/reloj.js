import React, { useEffect, useState } from "react";

function Reloj() {
  const [relojState, setRelojState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setRelojState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="reloj">{relojState}</div>;
}

export default Reloj;
