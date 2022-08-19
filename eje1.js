/*1)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
EL RESULTADO

function ________(x,z){

	return
}*/

function operaciones(x,z){
    let num1=parseInt(x) 
    let num2= parseInt(z)

    if (num1<num2) {
        let resultado=num2/num1
        console.log("El resultado es: ",resultado)
        return resultado
    }else{
        let resultado= num1*num2
        
        console.log("El resultado es: ",resultado)
        return resultado
    }

    
}
console.log("-----------------------EJERCICIO UNO--------------------")

5
let x= 22
let z= 34
operaciones(x,z)



/* 
2)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
ES (SI ES STRING, NUMBER, BOOLEAN, ETC)

function ________(a){

	return
}
*/

function tipoDat(valor){
    let dato=typeof valor
    
    return console.log(dato)   
}

console.log("-----------------------EJERCICIO DOS--------------------")
let valor="Hola"
tipoDat( valor)

/*3)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
- a y b SE SUMAN
- EL RESULTADO DE LA SUMA SE RESTA CON c
- LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
- FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
- SE RETORNA EL RESULTADO
- TIP: RECORDAR EL ORDEN
*/
console.log("-----------------------EJERCICIO TRES--------------------")
function operaciones(a, b, c, d, e, f){
  
    let suma= (a+b)
    let resta=(suma-c)
    let mult=(resta*d)
    let div=(mult/e)
    let resultado=(div**f)
   
    return  console.log(parseInt(resultado))
}
let a=parseInt(23) 
let b=parseInt(45)
let c=parseInt(123)
let d=parseInt(45)
let e=parseInt(5)
let f=parseInt(3)


operaciones(a,b,c,d,e,f,)



/* 
4)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.


function ________([]){

	return
}
*/
console.log("-----------------------EJERCICIO CUATRO--------------------")
function ultTres(arregloNum){
    let num= arregloNum.at(-1)
    let num2= arregloNum.at(-2)
    let num3= arregloNum.at(-3)
    
    const nuevoArray=[]
    nuevoArray.push(num, num2,num3)

    return console.log(nuevoArray)
}
const arregloNum=[1,2,3,4,5,5,6]
ultTres(arregloNum)


/* IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO

function ________([]){

	return
}
*/
console.log("-----------------------EJERCICIO CINCO--------------------")


function ordenar(miArray){
    console.log(miArray.sort())
}
const miArray=["Santiago","Juan", "Mariela", "Pablo"]
ordenar(miArray)


/*
6)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
RETORNAR EL ARRAY FILTRADO

function ________(a,b){

	return
}

*/
console.log("-----------------------EJERCICIO SEIS--------------------")

function filtrar(nombre, nombres){

    for (i=0;i < nombres.length;i++) {
        if (nombres[i] === b){
                nombres.splice(i,1)
            }
        } return nombres

}

const nombres=["Susana", "Lautaro","Ruth", "Lautaro"]
let nombre="Lautaro"
console.log(filtrar(nombre,nombres))

/*

7)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

function ________([]){

	return
}
*/



/*8)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
AL VALOR DEL STRING DEL ARGUMENTO

function ________({}, str){

	return
}

Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
	Retorna 'Rosa'
*/
/*
9)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
LA SUMA DE TODOS SUS VALORES.

function ________({}){

	return
}*/



