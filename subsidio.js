
let subsidio = 
    {
        edad: 60,
        ci: true,
        ahorroUf: 6,
        rsh: 60,
        nConvivientes: false,
        ingresoFamiliar: 9,
        propietarioVivienda: true,
        beneficiarioMinvu: false,
    };

function apruebaSubsidio(datosPostulante) {
    if (datosPostulante.edad >= 18
        && datosPostulante.ci == true 
        && datosPostulante.ahorro >= 4
        && datosPostulante.rsh <= 70 
        && datosPostulante.nConvivientes == true || datosPostulante.edad >= 60 && datosPostulante.nConvivientes == false
        && datosPostulante.ingresoFamiliar >= 7) 
    {   console.log("Cumple condiciones para postular al subsidio")  
    }
    else {
        console.log("no cumple condiciones");
    }
};

apruebaSubsidio(subsidio);



