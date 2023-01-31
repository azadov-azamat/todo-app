import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import * as red from "../../redux/reducers/red"
import {BiEdit, BiTrash} from "react-icons/bi"
import {AiFillCheckCircle} from "react-icons/ai"

export default function ListTodo() {

    const dispatch = useDispatch()
    const {todoList} = useSelector(state => state.red)

    function byId(data){
        dispatch(red.byId(data))
    }

    const deleteTodo = useCallback((data) => {
        dispatch(red.deleteTodoById(data))
    }, [])

    const updateTodo = useCallback((data) => {
        dispatch(red.updateTodo(data))
    }, [])

    useEffect(() => {
        dispatch(red.readTodo({}))
    }, [deleteTodo, updateTodo])

    return (
        <div>
            <ul className={"gap-4"}>
                {todoList?.map((item, index) =>
                    <li key={index.toString()}
                        className={"flex justify-between p-4 items-center w-full h-14 shadow shadow-input text-overpass bg-white"}>
                        <span>{item?.text}</span>
                        <div className={"flex gap-2"}>
                            <BiTrash onClick={() => deleteTodo(item)}
                                     className={"w-5 h-5 cursor-pointer text-primary_red"}/>
                            <BiEdit onClick={() => byId(item)} className={"w-5 h-5 cursor-pointer text-primary_yellow"}/>
                            <AiFillCheckCircle onClick={() => updateTodo(item)}
                                               className={`w-5 h-5 cursor-pointer ${item?.status ? 'text-primary_green' : 'text-primary_red'}`}/>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}