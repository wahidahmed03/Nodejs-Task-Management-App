const express = require("express")
const {authMiddleware} = require("./utilities/utilities")
const {CreateTaskHandeler,GetTask,UpDateTaskHandeler,GetSingleTask,DeletTaskHandeler} =require("./utilities/TaskHandeler")

const TaskRouteHandeler = express.Router()

TaskRouteHandeler.get("/", authMiddleware ,GetTask)
TaskRouteHandeler.post("/", authMiddleware ,CreateTaskHandeler)
TaskRouteHandeler.get("/:id", authMiddleware ,GetSingleTask)
TaskRouteHandeler.put("/:id", authMiddleware ,UpDateTaskHandeler)
TaskRouteHandeler.delete("/:id", authMiddleware ,DeletTaskHandeler)




module.exports = TaskRouteHandeler