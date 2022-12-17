export default function ResponderDelete(res, data, mensaje){
if (data.affectedRows <= 0 ){
    return res.status(404).json({
        estatus: 2,
        descripcion: mensaje
    })
}
    return res.status(404).json({
        estatus: 1,
        descripcion: 'ejecucion de codigo correctamente'
    })

}