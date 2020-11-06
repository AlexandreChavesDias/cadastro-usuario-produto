import {htttp} from './config'

export default {
    salvar: (usuario)=>{
        return htttp.post('usuario',usuario)
    }
}