class Persona {

    private _nombre: string
    private _edad: number
    private _dni: number
    private _sexo: string = "H"
    private _peso: number
    private _altura: number

    constructor(nombre: string, dni: number, sexo: string, peso: number, altura: number, edad: number) {
        this._nombre = nombre
        this._dni = dni
        this._sexo = sexo
        this._peso = peso
        this._altura = altura
        this._edad = edad

    }

    get nombre(): string {
        return this._nombre
    }
    set nombre(Newnombre: string) {
        this.nombre = Newnombre;
    }

    esMayorDeEdad(edad, EsMayor) {

        if (edad >= 18) {
            EsMayor: Boolean
        }
        return EsMayor = true
    }
}

// _Numero1: number
// _Numero2: number

// constructor(Numero1: number, Numero2: number) {
//     this._Numero1 = Numero1
//     this._Numero2 = Numero2
// }

// get Numero1(): number {
//     return this._Numero1
// }
// set Numero1(NewNumero1: number) {
//     this.Numero1 = NewNumero1
// }

// get Numero2(): number {
//     return this._Numero2
// }
// set Numero2(NewNumero2: number) {
//     this.Numero1 = NewNumero2
// }