class Cotizador {
    constructor(tipoCredito, monto, interesFijo, cuotas) {
        this.tipoCredito = tipoCredito
        this.monto = monto
        this.interesFijo = interesFijo
        this.cuotas = cuotas
    }
    obtenerCotizacion() {
        return this.monto * this.interesFijo * this.cuotas 
    }
}