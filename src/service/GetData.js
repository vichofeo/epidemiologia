//consumo de datos
import {http} from './apiLocal'

//para realizar consultas
//devuelve 
export const getGrupoForms = async ()=>{
    const res =  await http().get('/grupo')    
    return res.data
}

export const getFormularios = async (data)=>{
    
    const res =  await http().post('/formulario', data)    
    return res.data
}
export const getEnfermedad = async ()=>{
    const res =  await http().get('/enfermedad')    
    return res.data
}

export const getfrmOptions = async ()=>{
    const res =  await http().get('/frmoptions')    
    return res.data
}
export const getTypeQuestion = async ()=>{
    const res =  await http().get('/typequestion')    
    return res.data
}

export const getfrmAllContent = async(id)=>{
    const res = await http().get('formulario/'+id)
    return res.data
}


export const getReportUsr = async (data)=>{
    
    const res =  await http().post('/reportUsr', data)    
    return res.data
}
export const getReportAll = async ()=>{
    
    const res =  await http().get('/reportAll')    
    return res.data
}

//***********dptos-minis */
export const getPais = async (data)=>{    
    const res =  await http().post('/pais', data)    
    return res.data
}
export const getDpto = async (data)=>{    
    const res =  await http().post('/dpto', data)    
    return res.data
}
export const getMuni = async (data)=>{    
    const res =  await http().post('/muni', data)    
    return res.data
}

//--------------- GET DE GESTORES *****
export const getGestores = async (data)=>{    
    const res =  await http().post('/gestores', data)    
    return res.data
}
export const getEstablecimientos = async (data)=>{    
    const res =  await http().post('/establecimientos', data)    
    return res.data
}

//---------------------------------
//devuelve datos por departamento seleccionado
export const getDptosByDpto = async(dpto)=>{
    const res = await http().get('dptos/dp/'+dpto)
    return res.data
}
//devuelve datos de todas las provincias coordenas
export const getMuns = async ()=>{
    const res =  await http().get('/dptos/pp')    
    return res.data
}

export const getMunsByDpto= async (dpto) => {
    const res = await http().get('/dptos/pp/' + dpto)
    return res.data
}



export const getInforHospital= async (hosp) => {
    const res = await http().get('/est/infoh/' + hosp)
    return res.data
}

//****************************************************** */
export async function getCliente(id) {
    const res = await http().get("/cliente/" + id)
    return res.data
}

export const registrar = async (datos)=>{
    return http().post('/beneficiario/ente-gestor', datos)
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