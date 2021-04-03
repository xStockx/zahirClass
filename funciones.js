const PI = 3.14;
calculoArea (5 , 5 , "rectangulo")
calculoArea (10, PI, "circulo")
function calculoArea(valor1 , valor2 , tipo){
    if(tipo == "circulo"){
        var areaCirculo = valor1 * valor1 * valor2
        console.log(areaCirculo)
    }
   else if(tipo == "rectangulo"){
        var areaRectangulo = valor1 * valor2
        console.log(areaRectangulo)
    }
}