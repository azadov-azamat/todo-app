import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import * as Yup from "yup"
import {useFormik} from "formik"
import * as red from "../../redux/reducers/red"

export default function CountItems() {

    const {todoList} = useSelector(state => state.red)

    const [done, setDone] = useState(0)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setDone(todoList?.filter(item => item.status === true)?.length)
        setProgress(todoList?.filter(item => item.status === false)?.length)
    }, [todoList])

    return (
        <div className={"flex w-full my-5"}>
            <span className={"w-1/2 h-10 px-4 py-2 border border-solid border-bd"}>ToDo Done : {done}</span>
            <span className={"w-1/2 h-10 px-4 py-2 border border-solid border-bd"}>ToDo On Progress : {progress}</span>
        </div>
    )
}