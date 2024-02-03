import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export const displayError = (errorMsg) => {
    toast.error(errorMsg)
}

export const displaySuccess = (successMsg) => {
    toast.success(successMsg);
}