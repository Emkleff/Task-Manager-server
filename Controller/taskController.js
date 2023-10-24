const Task = require('../Models/Task')


const getAllTasks = async (req, res) => {
    // res.send('get all task')
    try {
        const tasks = await Task.find();
        res.status(200).json({ tasks });
    } catch (error) {
        res.json(error);
        console.log(error);
    }
};

const getSingleTask = async (req, res) => { 
    const {taskId} = req.params
    try {
        const task = await Task.findById({_id: taskId})

        if(!task) {
            return res.status(404).json({success: false,});
   }
   res.status(200).json({ task})

    } catch (error) {
        res.json(error)
        console.log(error);
    }
};

const createTask = async (req, res) => {
    // res.send('create a task')
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.json(error)
        console.log(error);
    }
};

const updateTask = async (req, res) => {
    // res.send('update a task')
    const {taskId} = req.params

    try {
        const task = await Task.findByIdAndUpdate({_id: taskId}, req.body, {
             new: true,
            runValidators: true
        });

        res.status(200).json({ task });

    } catch (error) {
        res.json(error)
        console.log();
    }
};

const deleteTask = async (req, res) => {
    // res.send('delete a task')
    const taskId = req.params.taskId
    try {
        const task = await Task.findByIdAndDelete({_id: taskId})
        res.status(200).json({ success: true, msg: "successful"});

    } catch (error) {
        res.json(error);
        console.log(error);
    }
};

module.exports = {getAllTasks, getSingleTask, createTask, updateTask, deleteTask}
    