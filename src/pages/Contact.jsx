// function Contact() {
//   return <h1>Página Inicial - Contact</h1>;
// }

// export default Contact;

import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  function handleSubmit() {
    alert("Mensagem enviada!");
    navigate("/"); // Redireciona para a página inicial
  }

  return (
    <div>
      <h1>Contato</h1>
      <button onClick={handleSubmit}>Enviar Mensagem</button>
    </div>
  );
}

export default Contact;
