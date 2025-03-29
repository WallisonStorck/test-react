import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <>
      <h1>Detalhes do Produto</h1>
      <p>ID do produto: {id}</p>
    </>
  );
}

export default Product;
