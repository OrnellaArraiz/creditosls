//Simulador de crédito
const interesFijo = 3

//Interacción con usuario
function calcularPrestamo() {

    let monto = parseInt(prompt("Ingresa el monto que necesitas:"))
    let totalCuotas = parseInt(prompt("¿En cuántas cuotas? (hasta 24)"))

        if (isNaN(monto) || isNaN(totalCuotas)) {
            console.error("El monto no es válido. Intenta de nuevo por favor.")
            return 
        }

        if (totalCuotas >= 1 && totalCuotas <= 24) {
            alert("A continuación, verás el detalle de las " + totalCuotas + " cuotas para el monto USD$ " + monto)
            calcularCuotaMensual(monto, totalCuotas, interesFijo)
        } else {
            console.warn("El total de cuotas no puede superar las 24. Intenta de nuevo por favor.")
        }
}

function calcularCuotaMensual(monto, meses, interes) {
    console.log("Cuotas")
    let desgloce = (monto * interes) / meses
        for (let i = 0; i < meses; i++) {
            console.log("Cuota " + (i + 1) + " USD$ " + desgloce.toFixed(2))
        }
}