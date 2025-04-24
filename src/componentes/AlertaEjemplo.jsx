import Swal from 'sweetalert2';

function AlertaEjemplo() {
  const mostrarAlerta = () => {
    Swal.fire({
      title: 'Messi',
      text: 'Forro que miras.',
      icon: 'question',
      confirmButtonText: 'haceme click y Anda Pa Ya BOBO!!',
    });
  };

  return (
    <div>
      <h2>Por FAVOR hace Caso a los mensajes</h2>
      <button onMouseOver={mostrarAlerta}>
        no pases por aca
      </button>
    </div>
  );
}

export default AlertaEjemplo;
