import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import * as Yup from "yup"
import {useFormik} from "formik"
import * as red from "../../redux/reducers/red"

export default function CreateTodo() {

    const dispatch = useDispatch()
    const {byId} = useSelector(state => state.red)

    const ValidateSchema = Yup.object().shape({
        text: Yup.string().required()
    })

    const formik = useFormik({
        validationSchema: ValidateSchema,
        initialValues: {
            text: ''
        },
        onSubmit: (val, {resetForm}) => {
            if (byId === null) {
                dispatch(red.createTodo(val)).then(() => {
                    resetForm({values: ''})
                })
            } else {
                const data = {
                    id: byId.id,
                    text: val?.text,
                    status: byId?.status
                }

                dispatch(red.updateTodo(data)).then(() => {
                    resetForm({values: ''})
                })
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={"flex items-center drop-3xl"}>
            <input
                className={"w-full h-14 py-4 px-5 border text-overpass"}
                name={"text"}
                type={'text'}
                defaultValue={byId?.text}
                value={formik.values?.text}
                onChange={formik.handleChange}
            />
            <button type={"submit"} className={"w-[85px] h-14 border border-red bg-red"}
                    disabled={!formik.isValid || !formik.dirty}>Saqlash
            </button>
        </form>
    )
}