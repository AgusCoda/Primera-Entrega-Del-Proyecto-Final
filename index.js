const alumnosBiologia = [
    { nombre: "Agustin Codarini", nota: 5, materia: "Biologia" },
    { nombre: "Facundo Rodriguez", nota: 8, materia: "Biologia" },
    { nombre: "Leandro Ponce", nota: 3, materia: "Biologia" },
    { nombre: "Matias Gonzalez", nota: 6, materia: "Biologia" },
    { nombre: "Franco Rivera", nota: 10, materia: "Biologia" }
];

const alumnosMatematica = [
    { nombre: "Agustin Codarini", nota: 2, materia: "Matematica" },
    { nombre: "Facundo Rodriguez", nota: 9, materia: "Matematica" },
    { nombre: "Leandro Ponce", nota: 4, materia: "Matematica" },
    { nombre: "Matias Gonzalez", nota: 6, materia: "Matematica" },
    { nombre: "Franco Rivera", nota: 7, materia: "Matematica" },
    { nombre: "Guillermo Di Chiara", nota: 7, materia: "Matematica" },
    { nombre: "Camila Rodriguez", nota: 5, materia: "Matematica" }
];

const alumnosFisica = [
    { nombre: "Agustin Codarini", nota: 1, materia: "Fisica" },
    { nombre: "Facundo Rodriguez", nota: 7, materia: "Fisica" },
    { nombre: "Leandro Ponce", nota: 8, materia: "Fisica" },
    { nombre: "Matias Gonzalez", nota: 7, materia: "Fisica" },
    { nombre: "Franco Rivera", nota: 4, materia: "Fisica" },
    { nombre: "Gianluca Cuccioleta", nota: 5, materia: "Fisica" }
];

const alumnosQuimica = [
    { nombre: "Agustin Codarini", nota: 10, materia: "Quimica" },
    { nombre: "Facundo Rodriguez", nota: 7, materia: "Quimica" },
    { nombre: "Leandro Ponce", nota: 8, materia: "Quimica" },
    { nombre: "Franco Rivera", nota: 3, materia: "Quimica" },
    { nombre: "Matias Gonzalez", nota: 6, materia: "Quimica" },
    { nombre: "Guillermo Di Chiara", nota: 9, materia: "Quimica" },
    { nombre: "Gianluca Cuccioleta", nota: 2, materia: "Quimica" },
    { nombre: "Camila Rodriguez", nota: 8, materia: "Quimica" },
    { nombre: "Sofia De Luca", nota: 8, materia: "Quimica" }
];

function clase() {
    let materia = parseInt(prompt("Elegí una materia para ver la cantidad de alumnos que contiene! \n 1 - Biologia \n 2 - Matematica \n 3 - Fisica \n 4 - Quimica"))

    if(materia === 1) {
        console.log(alumnosBiologia.length)
            let aprobado = parseInt(prompt("Desea ver los alumnos aprobados o desaprobados? \n 1 - Aprobados \n 2 - Desaprobados")) 
                if(aprobado === 1) {
                    let alumnosBiologiaMateriaAprobado = alumnosBiologia.filter(alumnos => alumnos.nota >= 7);
                    console.log(alumnosBiologiaMateriaAprobado)
                }else if(aprobado === 2) {
                    let alumnosBiologiaMateriaDesaprobado = alumnosBiologia.filter(alumnos => alumnos.nota < 7);
                    console.log(alumnosBiologiaMateriaDesaprobado)
                }else {
                    alert("No ingresaste un valor correcto.")
                }
    }else if(materia === 2) {
        console.log(alumnosMatematica.length)
            let aprobado = parseInt(prompt("Desea ver los alumnos aprobados o desaprobados? \n 1 - Aprobados \n 2 - Desaprobados"))
                if(aprobado === 1) {
                    let alumnosMatematicaMateriaAprobado = alumnosMatematica.filter(alumnos => alumnos.nota >= 7);
                    console.log(alumnosMatematicaMateriaAprobado)
                }else if(aprobado === 2) {
                    let alumnosMatematicaMateriaDesaprobado = alumnosMatematica.filter(alumnos => alumnos.nota < 7);
                    console.log(alumnosMatematicaMateriaDesaprobado)
                }else {
                    alert("No ingresaste un valor correcto.")
                }    
    }else if(materia === 3) {
        console.log(alumnosFisica.length)
            let aprobado = parseInt(prompt("Desea ver los alumnos aprobados o desaprobados? \n 1 - Aprobados \n 2 - Desaprobados"))
                if(aprobado === 1) {
                    let alumnosFisicaMateriaAprobado = alumnosFisica.filter(alumnos => alumnos.nota >= 7);
                    console.log(alumnosFisicaMateriaAprobado)
                }else if(aprobado === 2) {
                    let alumnosFisicaMateriaDesaprobado = alumnosFisica.filter(alumnos => alumnos.nota < 7);
                    console.log(alumnosFisicaMateriaDesaprobado)
                }else {
                    alert("No ingresaste un valor correcto.")
                }          
    }else if(materia === 4) {
        console.log(alumnosQuimica.length)
            let aprobado = parseInt(prompt("Desea ver los alumnos aprobados o desaprobados? \n 1 - Aprobados \n 2 - Desaprobados")) 
                if(aprobado === 1) {
                    let alumnosQuimicaMateriaAprobado = alumnosQuimica.filter(alumnos => alumnos.nota >= 7);
                    console.log(alumnosQuimicaMateriaAprobado)
                }else if(aprobado === 2) {
                    let alumnosQuimicaMateriaDesaprobado = alumnosQuimica.filter(alumnos => alumnos.nota < 7);
                    console.log(alumnosQuimicaMateriaDesaprobado)
                }else {
                    alert("No ingresaste un valor correcto.")
                }     
    }else{
        alert("No ingresaste un valor correcto.")
        clase()
    }
}

clase();