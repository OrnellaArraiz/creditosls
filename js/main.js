const interesFijo = 2
let tipoCredito = {}
let monto = 0

const credito = [{codigo: 1, tipo: "Personal", factor: 1.12},
                {codigo: 2, tipo: "Hipotecario", factor: 1.24},
                {codigo: 3, tipo: "Salud", factor: 1.36}] 

function iniciarCotizacion() {
    codigo = prompt ("Ingresa el código numérico del crédito a solicitar: 1 - Personal, 2 - Hipotecario, 3 - Salud")
    tipoCredito = credito.find((credito)=> credito.codigo === parseInt(codigo))
    if (tipoCredito === undefined) {
        alert("⛔️ Error en el código ingresado.")
        return 
    }
    
    monto = parseInt(prompt("Ingresa el monto que necesitas:"))
    totalCuotas = parseInt(prompt("¿En cuántas cuotas? (hasta 24)"))

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
    
            const cotizadorCredito = new Cotizador(tipoCredito, monto, interesFijo, totalCuotas)
            let valorCuotaMensual = cotizadorCredito.obtenerCotizacion()
            alert("✅ El costo mensual de su cuota de crédito es $ " + valorCuotaMensual.toFixed(2))
        }

        iniciarCotizacion()
