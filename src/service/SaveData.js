//consumo de datos
import {http} from './apiLocal'


export const registrarGrupo = async (datos)=>{
    return http().post('/group', datos)
}

export const registrarFrm = async (datos)=>{
    return http().post('/frm', datos)
}

export const baja = async (datos)=>{
return  http().put('/beneficiario/ente-gestor', datos)
    
}
export const ampliacion = async(datos)=>{
    return http().put('/beneficiario/ampliacion-fecha', datos)
}

//******************** ADQUISICION DE DATOS PARA CUADROS DE DATOS (std)******** */

export const dataStd = async(datos) =>{
    const res = await http().post('/est/std', datos)
 return res.data
}