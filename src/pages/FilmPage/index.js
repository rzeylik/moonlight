import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import Select from 'react-select'

import './styles.css'
import Layout from "../../components/Layout"
import Board from "../../components/Board"
import {isNil} from "lodash"

const FilmPage = () =>{
    const date = ['10:39', '14:00', '15:30', '17:00', '18:00', '23:00']
    const dateView = [{value: '29.12.22', label: '29.12.22'}, {value:'30.12.22', label: '30.12.22'}]
    const mass = [1,3,4,8,9]
    const data = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]
    const [place, setPlace] = useState([])
    const {handleSubmit, register, formState: { errors },} = useForm()

    useEffect(() => {
        const selectedElements = data.reduce((n, v, i) => {
        const presentCheck = mass.includes(i + 1)
        return [...n, presentCheck]
        }, [null])
        setPlace(selectedElements)
    }, [])

    const onSubmit = (data) => console.log(data)

    return (
        <Layout>
            <Board/>
            <section className="container">
                <h1 className="formTitle">Оберіть місця</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="filmTicket">
                    <div className="filmTicketItem">
                        <div className="filmTextInner">
                            <p className="formText">Дата</p>
                            <Select defaultValue={dateView[0]} options={dateView} />
                        </div>
                        <div className="formInnerTimeCheckbox">
                            {date.map((item, index) => <label key={index+1} className="formRadioText"><input {...register('timeCheckbox')} className="d-none" type="radio" value={item}/><span>{item}</span></label>)}
                        </div>
                        <div style={{marginBottom: 25}} className="filmTextInner">
                            <p className="formText">Вартість</p>
                            <p className="filmDate">{`${300} грн`}</p>
                        </div>
                        <button type="submit" className="formSubmit">Забронювати</button>
                    </div>
                    <div className="formPlace">
                        {[...place.slice(0,7), null, ...place.slice(8) ].map((bool, index) => <input {...register(`check`)} className="formPlaceCheck" style={isNil(bool) ? {visibility: 'hidden'} : {}} key={index+1} disabled={bool || isNil(bool) ? true : false} value={bool || isNil(bool) ? '' : index + 1} type="checkbox"/>)}
                    </div>
                </form>
            </section>
        </Layout>
    )
}

export default FilmPage