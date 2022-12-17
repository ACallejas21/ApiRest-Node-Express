export default function Responder(res,data, mensaje, nombreArray){
    if (data.length <= 0 ) {
        return res.status(404).json({
            estatus: 2,
            descripcion: mensaje
        })
    }else{
        return res.status(200).json({
            // estatus: 1,
            // descripcion: "Empleado usuario Encontrado",
            [`${nombreArray}`]: data
        })
    }
}