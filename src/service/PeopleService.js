//consumo de datos
import {http} from './apiLocal'

//para realizar consultas
//devuelve 
export const searchPeople = async (data)=>{
    const res =  await http().post('/people', data)    
    return res.data
}

export const getDataCnfcre = async (data)=>{
    const res =  await http().post('/getDataConfigCre', data)    
    return res.data
}

export const saveCnfcre = async (data)=>{
    const res =  await http().post('/saveConfigCre', data)    
    return res.data
}



