class Persona {
    constructor(salario, bono, cumplio){
        this.bono = bono;
        this.salario = salario;
        this.cumplio = cumplio;
    }

     ReglaDeCumplimiento(){
        if (this.cumplio == "si") {
            this.bono = this.bono;
        } else {
            this.bono = this.bono/2;
        }
     }

     CalculoDeSalarioMensual(){
        let salarioMensual = this.salario + this.bono;
        console.log("El salario mensual es:", salarioMensual);
     }
}