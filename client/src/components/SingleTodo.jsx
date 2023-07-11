import React, { useState } from 'react';
import { updateTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

const SingleTodo = ({ ele }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(ele);

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        setEditing(!editing)
        console.log(text)
        dispatch(updateTodo(text))

    }
    const getUserData = (e) => {
        setText({ ...text, [e.target.name]: e.target.value })
    }

    return (
        <>
            {
                editing ?
                    <>
                        <div className="col-4 gy-4 tododiv" >
                            <div className="card-body">
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control mb-2"
                                    onChange={getUserData}
                                    value={text.title}
                                    required
                                />
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control mb-2"
                                    value={text.description}
                                    onChange={getUserData}
                                    required
                                />
                                <div className='btngroups'>
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                        save and update
                                    </button>
                                </div>

                            </div>
                        </div>
                    </>
                    :
                    <div className="col-4 gy-4 tododiv" >
                        <div className="card-body" style={{ backgroundColor: ele.done ? 'rgb(158, 162, 237)' : '' }}>
                            <p className='statusele'>{ele.done ? 'completed' : 'incomplete'}</p>
                            <h5 className="card-title mb-3">{ele.title}</h5>
                            <h6 className="card-subtitle mb-3 text-muted">{ele.description}</h6>
                            <div className='btngroups'>
                                <button className='btn btn-success' onClick={() => setEditing(!editing)}>
                                    <i class="fa-solid fa-pen-to-square" onClick={() => setEditing(!editing)}></i>
                                </button>
                                <button className='btn btn-primary mx-2'
                                    onClick={() => dispatch(deleteTodo(ele._id))}
                                >
                                    <i class="fa-solid fa-trash" style={{ color: 'white' }}></i>
                                </button>
                                <input type="checkbox" className='doneInput' onClick={() => dispatch(toggleTodo(ele._id))} defaultChecked={ele.done} />
                            </div>

                        </div>
                    </div>

            }
        </>
    )
}

export default SingleTodo
