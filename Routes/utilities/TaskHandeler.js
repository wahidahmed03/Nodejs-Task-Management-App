const path = require("path")

const FolderPath = path.join(__dirname,"../../.file/taskFile")


const {CraeteFile,getFile} = require("../utilities/FileHandeler")


const GetTask =(req,res)=>{
    const {email} = req.user
    const GetTask = getFile(FolderPath,email)
    res.status(200).json({GetTask})
}

// CREATE A HANDELER
const CreateTaskHandeler = (req,res)=>{
    const {title,description } = req.body
    const {email} = req.user
    if(title && description){

    const GetTaskList = getFile(FolderPath,email) || []
    const Task ={id:GetTaskList.length+1,title,description }
    GetTaskList.push(Task)
    CraeteFile(FolderPath,email,GetTaskList)
    res.status(200).json({GetTaskList})
}else{
    res.status(400).json({message:"Please provide task title and description"})
}
}


const GetSingleTask = (req,res) =>{
    const {id} =req.params;
    const { title, description } = req.body;
    const { email } = req.user
    const tasksList = getFile(FolderPath,email) 
    const taskIndex = tasksList.findIndex(t =>t.id === parseInt(id))
    if(taskIndex=== -1) return res.status(404).json({massage:"Task not found"})
    res.status(200).json(tasksList[taskIndex])
}

const UpDateTaskHandeler = (req,res) =>{
    const {id} =req.params;
    const { title, description } = req.body;
    const { email } = req.user
    const tasksList = getFile(FolderPath,email) 
    const taskIndex = tasksList.findIndex(t =>t.id === parseInt(id))
    if(taskIndex=== -1) return res.status(404).json({massage:"Task not found"})
    tasksList[taskIndex].title = title || tasksList[taskIndex].title
    tasksList[taskIndex].description = title || tasksList[taskIndex].description
    CraeteFile(FolderPath,email,tasksList)
    res.status(200).json(tasksList[taskIndex])
}



const DeletTaskHandeler = (req,res) =>{
    const {id} =req.params;
    const { email } = req.user
    const tasksList = getFile(FolderPath,email) 
    const taskIndex = tasksList.findIndex(t =>t.id === parseInt(id))
    if(taskIndex=== -1) return res.status(404).json({massage:"Task not found"})
    const NewTaskList =tasksList.filter(t => t.id !== parseInt(id))  
    CraeteFile(FolderPath,email,NewTaskList)
    const UpdatetasksList = getFile(FolderPath,email) 
    res.status(200).json(UpdatetasksList)
}


module.exports = {CreateTaskHandeler,GetTask,UpDateTaskHandeler,GetSingleTask,DeletTaskHandeler}