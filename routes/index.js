var express = require('express');
const TodoController = require('../controllers/todo');
var router = express.Router()

router.get("/api/test",(req,res)=>{
    res.send("test")
});

router.get("/api/fakeproduct", (request, response) => {
    response.json({
        message: "successfully get",
        status: true,
        products: [
            {
                name: "keyboard",
            },
            {
                name: "CPU"
            },
            {
                name: "Mouse"
            }
        ]
    })
})

//Create API
router.post("/api/todo",TodoController.createTodo)

// Get API
router.get("/api/todo",TodoController.getTodo)

//Delete Api
router.delete("/api/todo/:id", TodoController.deleteTodo)

//Edit Update API
router.put("/api/todo",TodoController.updateTodo)

module.exports = router; 