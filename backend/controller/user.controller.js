import todoModel from "../model/todo.model";

export const addeds = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = new todoModel({
            title, description
        })
        await todo.save()

        if (todo) {
            res.status(200).json({
                todo: todo,
                message: "todo added",
            })
        }
        else {
            res.status(400).json({
                message: "something went wrong"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}



export const getdata = async (req, res) => {
    try {
        const todo = await todoModel.find()

        if (todo) {
            res.status(200).json({
                todo: todo,
                // message: "student added",
            })
        }
        else {
            res.status(400).json({
                message: "something went wrong"
            })
        }

    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const getdataid = async (req, res) => {
    try {
        let ids = req.params.id
        const todo = await todoModel.findOne({ _id: ids });

        if (todo) {
            res.status(200).json({
                todo: todo,
                message: "todo fetched",
            })
        }
        else {
            res.status(400).json({
                message: "something went wrong"
            })
        }

    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


export const editdata = async (req, res) => {
    try {
        const id = req.params.id
        const { title, description } = req.body;
        let todo = await todoModel.findOne({ _id: id })

        const data = await todoModel.updateOne({ _id: id },
            {
                $set: {
                    title, description
                }
            }
        )

        if (data) {
            res.status(200).json({
                data: data,
                todo: todo,
                message: "data updated"
            })
        }
        else {
            res.status(400).json({
                message: "data not updated"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const deletedata = async (req, res) => {
    try {
        const ids = req.params.id
        let todo = await todoModel.findOne({ _id: ids })

        const data = await todoModel.deleteOne({ _id: ids })

        if (todo) {
            res.status(200).json({
                todo: todo,
                message: "data deleted"
            })
        }
        else {
            res.status(400).json({
                message: "data not deleted"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const toggleTodoDone = async (request, response) => {
    try {
        const todoRef = await todoModel.findById(request.params.id);

        const todo = await todoModel.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        )
        await todo.save();
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}