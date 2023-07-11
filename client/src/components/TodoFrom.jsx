import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";


const TodoFrom = () => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState({});
  const getUserData = (e) => {
    setTodos({ ...todos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("todos...", todos);
    dispatch(addNewTodo(todos))

  };

  return (
    <>
      <h1 className="text-center">Todo App</h1>
      <form className="col-lg-5 mx-auto my-4 p-4 formdiv" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title :</label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={getUserData}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description :</label>
          {/* <input
              type="text"
              name="description"
              className="form-control"
              onChange={getUserData}
              required
            /> */}
          <textarea
            name="description"
            className="form-control"
            onChange={getUserData}
            required cols="30" rows="5">
          </textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            ADD TODO
          </button>
        </div>



      </form>

    </>
  )
}

export default TodoFrom
