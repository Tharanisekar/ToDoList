const apiRequest = async(url = '',optionsObj=null,errMsg=null) =>{
    try{
        const response = await fetch(url,optionsObj)
        if(!response.ok) throw Error("plz reload the App")
    }
    catch(err){
        errMsg=err.Message
    }
    finally{
        return errMsg
    }

}
export default apiRequest