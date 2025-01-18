import { useState ,useDebugValue} from "react"

const useFormFields=()=>{
    const [fields,setFields]=useState({})
    const handleChange=(e)=>{
      const {target}=e
      setFields({...fields,[target.name]:target.value})
    }
    useDebugValue('custom hook for get All form input ')
    return [fields,handleChange]
}

export default useFormFields