import {htttp} from './config'

export default {
    salvar: (users)=>{
        return htttp.post('usuario',users)
    }
}