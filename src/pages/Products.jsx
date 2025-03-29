import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        <li>
          <Link to="/product/1">Produto 1</Link>
        </li>
        <li>
          <Link to="/product/2">Produto 2</Link>
        </li>
        <li>
          <Link to="/product/3">Produto 3</Link>
        </li>
      </ul>
    </>
  );
}

export default Products;
