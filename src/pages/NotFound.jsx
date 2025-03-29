import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Erro 404</h1>
      <p>Página não encontrada.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}

export default NotFound;
