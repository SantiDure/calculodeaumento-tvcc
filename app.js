document.addEventListener("DOMContentLoaded", (event) => {
  // Manejador del primer formulario
  const formPorcentaje = document.querySelector("#form_porcentaje");

  formPorcentaje.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const montoOriginal = parseFloat(
      formPorcentaje.querySelector('input[placeholder="Monto original"]').value
    );
    const montoActual = parseFloat(
      formPorcentaje.querySelector('input[placeholder="Monto actual"]').value
    );

    if (isNaN(montoOriginal) || isNaN(montoActual)) {
      alert("Por favor, ingrese valores numéricos válidos.");
      return;
    }

    const diferencia = montoActual - montoOriginal;
    const diferenciaPorcentual = (diferencia / montoOriginal) * 100;
    Swal.fire({
      title: "Listo!",
      html: `La diferencia porcentual es <br> <strong>${diferenciaPorcentual.toFixed(
        2
      )}%</strong> `,
      icon: "success",
      confirmButtonText: "Cool",
    });
  });

  // Manejador del segundo formulario
  const formMontoFinal = document.querySelector("#form_montoFinal");

  formMontoFinal.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const montoOriginal = parseFloat(
      formMontoFinal.querySelector('input[placeholder="Monto original"]').value
    );
    const porcentajeSumar = parseFloat(
      formMontoFinal.querySelector('input[placeholder="Porcentaje a sumar"]')
        .value
    );

    if (isNaN(montoOriginal) || isNaN(porcentajeSumar)) {
      alert("Por favor, ingrese valores numéricos válidos.");
      return;
    }

    const montoFinal = montoOriginal + montoOriginal * (porcentajeSumar / 100);

    Swal.fire({
      title: "Listo!",
      html: `El monto final es <br> <strong>$${montoFinal.toFixed()}</strong> `,
      icon: "success",
      confirmButtonText: "Cool",
    });
  });
});
