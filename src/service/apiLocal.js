
import axios from 'axios'
import {urlLocal, getHeaders} from '@/config/config'

export function http(){
    return axios.create({
        baseURL:urlLocal,
        headers: getHeaders()
    })
}

