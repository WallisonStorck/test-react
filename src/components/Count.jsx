import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  function Incrementar() {
    setCount(count + 1);
  }

  function Decrementar() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={Incrementar}>Incrementar</button>
      <button onClick={Decrementar}>Decrementar</button>
    </div>
  );
}

export default Count;
