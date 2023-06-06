class Cotizador {
    constructor(tipoCredito, monto, interesFijo, totalCuotas) {
        this.tipoCredito = tipoCredito
        this.monto = monto
        this.interesFijo = interesFijo
        this.totalCuotas = totalCuotas
    }
    obtenerCotizacion() {
        return this.monto * this.interesFijo * this.totalCuotas 
    }
}