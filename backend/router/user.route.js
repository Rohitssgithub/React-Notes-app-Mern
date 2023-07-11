import express from "express";
const router = express.Router();

import { addeds, getdata, editdata, getdataid, deletedata,toggleTodoDone } from "../controller/user.controller"

router.post("/todo/add", addeds)
router.get("/todos/get", getdata)
router.get("/todo/data/:id", getdataid)
router.put("/todo/edit/:id", editdata)
router.delete("/todo/delete/:id", deletedata)
router.get('/todos/:id', toggleTodoDone);

export default router

