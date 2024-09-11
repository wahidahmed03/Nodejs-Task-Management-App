const fs =  require("fs")


//GET FILE
const getFile =(FilePath,FileName,)=>{
    try {
        return JSON.parse((fs.readFileSync(`${FilePath}/${FileName}.json`)))
    } catch (error) {
        return null
    }
}


/// CREATE FILE
const CraeteFile =(FilePath,FileName,Data)=>{
    fs.writeFileSync(`${FilePath}/${FileName}.json`, JSON.stringify(Data, null, 2))
    return JSON.parse(fs.readFileSync(`${FilePath}/${FileName}.json`),"utf8" )
}


/// UPDATE FILE
const UpdateFile =(FilePath,FileName,Data)=>{
    fs.writeFileSync(fs.writeFileSync(`${FilePath}/${FileName}.json`, JSON.stringify(Data, null, 2)))
    return JSON.parse((fs.readFileSync(`${FilePath}/${FileName}`)))
}

/// CONST DELET FILE
const DeletFile =(FilePath,FileName)=>{
    
}

module.exports ={getFile,CraeteFile,UpdateFile,DeletFile}