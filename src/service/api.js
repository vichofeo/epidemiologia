
import axios from 'axios'
import {urlbase, getHeaders} from '@/config/config'

export function http(){
    return axios.create({
        baseURL:urlbase,
        headers: getHeaders()
    })
}

