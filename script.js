console.log("Buscador de Profesionales");

const profesionales =[
    {nombre: "Doctora Ana Mendoza", categoria:"medicina", subcategoria:"pediatria", telefono:"096548212", lugar:"Maldonado, Uruguay"},
    {nombre: "Doctor Pedro Gómez", categoria:"medicina", subcategoria:"medicina general", telefono:"2564852", lugar:"Maldonado, Uruguay"},
    {nombre: "Doctor Cesar Nazate", categoria:"medicina", subcategoria:"pediatria", telefono:"25658755", lugar:"Montevideo, Uruguay"},
    {nombre: "Doctora Belinda Aguilar", categoria:"medicina", subcategoria:"medicina general", telefono:"25752648", lugar:"Montevideo, Uruguay"},
    {nombre: "Abogado Juan Sanchez", categoria:"abogacia", subcategoria:"abogado penalista", telefono:"095548453", lugar:"Montevideo, Uruguay"},
    {nombre: "Ingeniera Estefania Luccin", categoria:"arquitecto", subcategoria:"arquitecta", telefono:"2548264", lugar:"Maldonado, Uruguay"}
]




function menu(){
  let eleccion = parseInt (prompt("Elije la categoria de profesionales: 1= Medicina, 2= Abogacia, 3= Arquitecto"));
 
  if(eleccion === 1 ){
        let eleccion3 = parseInt (prompt("1= Medicina general y 2= pediatria "));
        let eleccion2 = parseInt (prompt("elije el lugar: 1= Maldonado, 2= Montevideo"));
        if(eleccion === 1 && eleccion2 === 1 && eleccion3 === 2){
            console.log(profesionales[0])
        } else if (eleccion === 1 && eleccion2 === 1 && eleccion3 === 1){
            console.log(profesionales[1])
        } else if (eleccion === 1 && eleccion2 === 2 && eleccion3 === 2){
            console.log(profesionales[2])
        } else if (eleccion === 1 && eleccion2 === 2 && eleccion3 === 1){
            console.log(profesionales[3])
        } else {
            console.log("No se encuentran profesionales en esta area o lugar")
        }
    } else {
        let eleccion2 = parseInt (prompt("elije el lugar: 1= Maldonado, 2= Montevideo"));
         if (eleccion === 2 && eleccion2 === 2 ){
            console.log(profesionales[4])
        } else if (eleccion === 3 && eleccion2 === 1 ){
            console.log(profesionales[5])
        } else {
            console.log("No se encuentran profesionales en esta area o lugar")
        }
   
  }
  
  
}
  menu();
