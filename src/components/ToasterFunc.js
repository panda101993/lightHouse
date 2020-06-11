import { toast } from 'react-toastify';

const ToasterFunction=(type,message)=>{
    if(type=="success"){
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
          });     
    }
    else if(type=="error"){
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
          });
    }
    else if(type=="warn"){
        toast.warn(message, {
            position: toast.POSITION.TOP_RIGHT
          });
    }
    else if(type="info"){
        toast.info(message, {
            position: toast.POSITION.TOP_RIGHT
          });
    }             
}

export default ToasterFunction;