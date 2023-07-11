import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleTodo from './SingleTodo';
import Tabs from './Tab';
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../redux/actions/type';

import { getAllTodos } from '../redux/actions';

const Todos = () => {


    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    // console.log(todos)
    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    const currentTab = useSelector(state => state.currentTab);
    console.log(currentTab)

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.done)
        } else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done)
        }
    }

    return (
        <div>
            <Tabs currentTab={currentTab} />
            <div className='container'>
                <div className='row'>

                    {
                        getTodos().map((ele) => {
                            return (
                                <SingleTodo ele={ele} key={ele._id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Todos
