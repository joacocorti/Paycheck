const calcular = () => {
    let sueldo = document.getElementById('sueldo').value;
    let jubilacion = sueldo * 11 /100;
    let leyPami = sueldo *11 /100;
    let obraSocial = sueldo*3/100;
    let sindicato = sueldo*3/100;
    var asignacion = 0;
    let hijos = document.getElementById('hijos').value;
    let antiguedad = document.getElementById('antiguedad').value;
    let horasExtra = document.getElementById('horas-extra').value *130; //traigo la cantidad de horas ingresadas y la multiplico por un valor fijo de hora extra de $130

        //CALCULO EL MONTO DE ASIGNACION SEGUN EL SUELDO
    if (sueldo<3000 && sueldo ==!/^([0-9])*$/.test(sueldo)){
        let sueldo = prompt('Ingrese un sueldo correcto')
        document.getElementById('sueldo').value = sueldo
        console.log(sueldo)
    } if(sueldo >= 3000 && sueldo <= 30999){
        asignacion = 2000;
    }else if (sueldo >= 31000 && sueldo <= 45999){
        asignacion = 1300;
    }else if (sueldo >= 46000 && sueldo <= 52999){
        asignacion = 800;
    }else if (sueldo >= 53000 && sueldo <= 110000){
        asignacion = 400;        
    };

    if (hijos < 0){
        let hijos = prompt('Ingrese un numero de hijos correcto')
        document.getElementById('hijos').value = hijos 
        console.log("cant hijos", hijos) 

    

    }
    //CALCULO EL MONTO SEGUN LOS AÑOS DE ANTIGUEDAD (aumento de a 5 a 10 años)
    // if (antiguedad >= 1 && antiguedad < 5){
    //     antiguedad = (sueldo /100)*5;
        
    // }else if (antiguedad >= 5 && antiguedad < 10){
    //     antiguedad = (sueldo /100)*10;
    // }else if (antiguedad >= 10 && antiguedad < 20){
    //     antiguedad = (sueldo /100)*15;
    // }else if (antiguedad >= 20 && antiguedad < 25){
    //     antiguedad = (sueldo /100)*20;
    // }else if (antiguedad >= 25 && antiguedad < 30){
    //     antiguedad = (sueldo /100)*25;
    // }else if (antiguedad >= 30 && antiguedad < 40){
    //     antiguedad = (sueldo /100)*30;
    // };
    

    //ANTIGUEDAD DEL 1% ANUAL.
    antiguedad = (sueldo /100)*antiguedad;
    
    
    let asignacionHijos = hijos*asignacion; // MULTIPLICA LA CANTIDAD DE HIJOS INGRESADAS POR EL MONTO DE ASIGNACION YA FIJADO EN EL IF
   
    console.log("asignacion",asignacionHijos);
    console.log("antiguedad", antiguedad);
    console.log("horas extra", horasExtra);


};
