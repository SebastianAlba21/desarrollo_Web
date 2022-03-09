
console.log('Bang Bang', !!null);
console.log('Bang Bang', !!false);
console.log('Bang Bang', !!true);
// console.log('Bang Bang', !!undefined);
// console.log('Bang Bang', !!0);
// console.log('Bang Bang', !![]);
// console.log('Bang Bang', !!{});
// console.log('Bang Bang', !!NaN);
// console.log('Bang Bang', !!'');



// let _name: string = 'Ricardo';
// let _boolena: boolean = true;
// let _number: number = 0.9;

// var _apellido: string;

// _apellido = '0';

// function retorneUnStringTS(): string {
//     let _string = String(0);
//     return '';
// }

// function noRetornoTS(): void {

// }

// function reciboStringTS(value: string) {
//     console.log(value);
// }

// reciboStringTS(noRetornoTS());



/*
    Run TS
    npx ts-node src.ts

        npx ts-node --version

    ¿Que es un Paradigma?
    Los paradigmas de programación son modelos para resolver problemas comunes con nuestro código.
    Son caminos, guías, reglas, teorías y fundamentos que agilizan nuestro desarrollo y evitan que reinventemos la rueda.    
    La programación estructurada
    La programación orientada a objetos
    La programación funcional

    Programacion Estructurada
    La programación estructurada es una teoría orientada a mejorar la claridad, calidad y tiempo de desarrollo utilizando únicamente subrutinas o funciones.
    Secuencia: Vertical
    Seleccion o Condicional: Vertical con validaciones condicionales
    Iteracion: Vertical con ciclos y seleccion
    
    Programacion Funcional
    La programación funcional se caracteriza por dividir la mayor cantidad posible de tareas en funciones, 
    de esta forma estas tareas pueden ser usadas por otras funciones con diferentes objetivos.
    FUNCIONES PURAS
    COMPOSICIÓN DE FUNCIONES
    ESTADO COMPARTIDO
    MUTABILIDAD
    EFECTOS SECUNDARIOS

    POO
    Basado en “objetos”, es decir contienen datos y código. Datos en forma de campos (atributos o propiedades); código en forma de procedimientos (métodos).
    Esta compuesto por 4 elementos:
    Clases: Una clase es una plantilla para la creación de objetos de datos según un modelo predefinido. Las clases se utilizan para representar entidades o conceptos. 
            Cada clase es un modelo que define un conjunto de variables (el estado), y métodos apropiados para operar con dichos datos (el comportamiento). 
            Cada objeto creado a partir de la clase se denomina instancia de la clase.
    Propiedades: Las propiedades son las características de una clase;
    Métodos: Los métodos son las acciones que una clase puede realizar;
    Objetos: Son aquellos que tienen propiedades y comportamientos; tecnicamente son instancias de una clase. El objeto X es una instancia de X Clase.

    4Pilares
    Abstracción: Es la accion de abstraer una entidad del mundo real con los detalles que aportan valor.
    Encapsulamiento: El encapsulamiento nos permite controlar quien puede ver y utilizar los distintos módulos internos de nuestro sistema. 
                     En términos de clases, con el encapsulamiento definimos el acceso a los miembros de la clase
    Herencia: La herencia es una relación especial entre dos clases, la clase base y la clase derivada, en donde la clase derivada obtiene
              la habilidad de utilizar ciertas propiedades y funcionalidades de la clase base, incluso pudiendo sustituir funcionalidad de la clase base. La idea es que la clase derivada “hereda” algunas de las características de la clase base.
    Polimorfismo: Polimorfismo significa de muchas formas. En nuestro caso llamamos polimorfismo cuando un método recibe un parámetro que abarca varios tipos.

    PRIVATE
    Cuando una variable o un metodo es declarado como privado, este no puede ser accedido por fuera de la clase.

    PROTECTED
    Es muy parecido a la palabra reservada private , pero con la condicion de que sus metodos y variables pueden ser
    accedidas por las clases deribas o clases que hereden de su clase.

    Public
    Puede ser accedido desde cualquier lado

    En TypeScript no existe la herencia múltiple.
*/

abstract class Shape {
    private _height: number;
    private _width: number;
    private _base: number;
    static _valorEstatico: number = 4;

    constructor(height: number, width: number, newBase: number) {
        this._width = width;
        this._height = height;
        this._base = newBase;
    }

    get height(): number {
        return this._height;
    }

    set height(newHeight: number) {
        this._height = newHeight;
    }

    get width(): number {
        return this._width;
    }
    set width(newWidth: number) {
        this._height = newWidth;
    }

    calcularArea(): number {
        return this._width * this._height;
    }

    abstract area(): number;

    toString(): string {
        return `_height=${this._height} _width=${this._width} _base=${this._base}`;
    }
}

// let _shape: Shape = new Shape(10, 12, 5);
// console.log(_shape);
// console.log(_shape.toString());



class Square extends Shape {

    private color: string;

    constructor(height: number, width: number, newBase: number, newColor: string) {
        super(height, width, newBase);
        this.color = newColor;
    }

    area(): number {
        return this.width * this.height;
    }

}

const _square: Square = new Square(2, 2, 0, '#12Fd23');

console.log(_square);
console.log(_square.calcularArea());




class Triangle extends Shape {
    constructor(height: number, width: number, newBase: number) {
        super(height, width, newBase);
    }

    override area(): number {
        return (this.height * this.width) / 2;
    }
}

const _triangle: Triangle = new Triangle(2, 2, 0);



interface IShape {
    width: number;
    height: number;
    newBase: number;
}

class Rectangulo implements IShape {
    width: number;
    height: number;
    newBase: number;

}
// class Triangle extends Shape {

//     constructor(height: number, width: number) {
//         super(height, width);
//     }

//     // override area(): number {
//     //     return (super.height * super.width) / 2;
//     // }
//     perimeter(height: number): number {
//         return height * 3;
//     }
// }

// const _triangle: Triangle = new Triangle(2, 2);
// console.log(_triangle.perimeter(2))
// // _triangle.area();
// // _triangle.area(1);


// interface LabeledValue {
//     label: string;
// }

// class Label implements LabeledValue {
//     label: string;

// }



// /*
//     HOF = High order Function
//     A las funciones que puedan tomar funciones como parámetros y devolver funciones como resultado serán
//     conocidas como función de orden superior.
// */

// // type CallbackEdad = (edad: number) => void;

// // function calcularEdadMeses(callback: Function, meses: number): CallbackEdad{
// //     let edadAnios = Math.floor((meses / 12));

// //     return callback(edadAnios);
// // }

// // function callback(edad: number): void {
// //     console.log(`Hola soy Ricardo y tengo ${edad} años`);
// // }

// // calcularEdadMeses(callback, 120);


