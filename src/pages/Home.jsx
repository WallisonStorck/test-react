import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function irParaProdutos() {
    navigate("/products");
  }

  return (
    <>
      <h1>Página Inicial - Home</h1>
      <button onClick={irParaProdutos}>Ver Produtos</button>
    </>
  );
}

export default Home;
