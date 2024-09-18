class DocentesPorHora extends Docente {
    constructor(horasTrabajadas, PagoPorHora,cumplio) {
        super((horasTrabajadas*PagoPorHora), 1000, cumplio);
        this.horasTrabajadas = horasTrabajadas;
        this.PagoPorHora = PagoPorHora;
    }

    CalculoDeSalarioMensual() {
        this.ReglaDeCumplimiento();
        const salarioMensual = this.salario + this.bono;
        console.log('El salario mensual es', salarioMensual);
    }
}
