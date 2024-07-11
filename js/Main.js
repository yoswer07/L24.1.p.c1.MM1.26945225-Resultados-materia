/* Sean la informacion de varios estudiantes: cedula y nota final. Se sabe que los estudiantes aprueban con 48ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadistica: cantidad de aprobados, cantidad de reprobados
y nota promedio de la seccion*/

import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_Seccion from "./Cl_Seccion.js";

//instanciar el objeto
let estudiante = new Cl_Estudiante(888, 60);
let estudiante2 = new Cl_Estudiante(777, 50);
let estudiante3 = new Cl_Estudiante(999, 40);
let estudiante4 = new Cl_Estudiante(333, 80);
let estudiante5 = new Cl_Estudiante(111, 30);
let estudiante6 = new Cl_Estudiante(666, 90);
let estudiante7 = new Cl_Estudiante(444, 48);
let estudiante8 = new Cl_Estudiante(222, 60);

let seccion = new Cl_Seccion();
seccion.procesarEstudiante(estudiante);
seccion.procesarEstudiante(estudiante2);
seccion.procesarEstudiante(estudiante3);
seccion.procesarEstudiante(estudiante4);
seccion.procesarEstudiante(estudiante5);
seccion.procesarEstudiante(estudiante6);
seccion.procesarEstudiante(estudiante7);
seccion.procesarEstudiante(estudiante8);


//salida solicitada
let salida = document.getElementById('Salida');
salida.innerHTML = 'Resultados'
salida.innerHTML += '<br> Cantidad de aprobados = ' + seccion.devolverAprobados();
salida.innerHTML += '<br> Cantidad de reprobados = ' + seccion.devolverReprobados();
salida.innerHTML += '<br> Nota promedio de la seccion = ' + seccion.promedioNotas();