//Juan Sebastian Alba Morales Codigo: 2170269
//Punto 1
class Matematicas {
   
    Sumar(Numero1: number, Numero2: number) {
        console.log(Numero1 + Numero2)

    }
    Restar(Numero1: number, Numero2: number) {
        console.log(Numero1 - Numero2)
    }
    Multiplicar(Numero1: number, Numero2: number) {
        console.log(Numero1 * Numero2)
    }
    Dividir(Numero1: number, Numero2: number) {
        console.log(Numero1 / Numero2)
    }
}

//Punto 2
class Persona1 {

    _Nombre: string
    _Apellido: string
    _Cedula: number

    constructor(Nombre: string, Apellido: string, Cedula: number) {
        this._Nombre = Nombre
        this._Apellido = Apellido
        this._Cedula = Cedula
    }

    get Nombre(): string {
        return this._Nombre
    }
    set Nombre(Newnombre: string) {
        this.Nombre = Newnombre;
    }

    get Apellido(): string {
        return this.Apellido
    }
    set Apellido(NewApellido: string) {
        this.Apellido = NewApellido
    }
    get Cedula(): number {
        return this._Cedula
    }
    set Cedula(NewCedula: number) {
        this.Cedula = NewCedula
    }

}
//Punto 3
class Empleado extends Persona1 {
    _SeguroMedico: string
    _Cargo: string
    _Salario: number

    constructor(nombre: string, apellido: string, cedula: number, seguroMedico: string, cargo: string, salario: number) {
        super(nombre, apellido, cedula);
        this._SeguroMedico = seguroMedico;
        this._Cargo = cargo;
        this._Salario = salario;
    }

    SalarioComparacion() {
        let salarioIntegral: number = 13000000;
        let esMayor: boolean = false;

        if (this._Salario > salarioIntegral) {
            esMayor = true;
            console.log(esMayor);
        }
    }
}

