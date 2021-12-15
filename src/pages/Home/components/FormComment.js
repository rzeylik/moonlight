import React, {useEffect, useState} from 'react'
import {Controller, useForm} from "react-hook-form";

import {postComments} from "../../../api/comments";
import {getUser} from "../../../api/user";

const FormComment = ({setComments, id}) => {
    const [initialUser, setInitialUser] = useState(null)
    useEffect(() => {
        getUser().then(setInitialUser)
    }, [])
    const {handleSubmit, control, reset} = useForm()
    const commentSubmit = (data) => {
        const newData = {film_id: id, message: data?.message}
        postComments(newData).then(data => {
            const newComment = {comment: data?.message, avatar: initialUser.avatar, username: initialUser.username}
            setComments((oldState) => [...oldState, newComment])
            reset()
        })
    }
    return(
    <form onSubmit={handleSubmit(commentSubmit)}>
        <Controller name="message" control={control} render={({field}) => <textarea {...field} placeholder="Your comment" className="commentInput"/>}/>

        <button className='formSubmit' type="submit">Submit</button>
    </form>)
}

export default FormComment