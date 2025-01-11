import toast from "react-hot-toast";
const notify=(type , message)=>{
    toast[type](message , {
        duration: 4000
    })
}
export default notify