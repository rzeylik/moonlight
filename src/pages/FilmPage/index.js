import React, {useEffect, useState} from "react"
import moment from "moment";
import {useForm} from "react-hook-form"
import {useParams} from "react-router-dom"
import {isEmpty, isNil, isObject, random, uniqBy} from "lodash"
import {Controller} from "react-hook-form"
import Select from 'react-select'
import {useSelector} from "react-redux";

import {getTicketsPlace, postNewTicket} from "../../api/tickets"
import {getSessions} from "../../api/session"
import {getFilmId} from "../../api/films"
import {getComments} from "../../api/comments";
import {getUser} from "../../api/user";
import Layout from "../../components/Layout"
import Board from "../../components/Board"
import FormComment from "../Home/components/FormComment";

import './styles.css'

const FilmPage = () =>{
    const allPlace =[[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,{}, {}, {}, {}, {}, {}, {},{}], [{}, {}, {}, {}, {}, {}, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,{},{},false,false,false,false, {},{}]]
    const [place, setPlace] = useState([])
    const [dataFilm, setDataFilm] = useState(null)
    const [sessions, setSessions] = useState({})
    const [select,setSelect] = useState([])
    const [price, setPrice] = useState('')
    const [yourPrice, setYourPrice] = useState('')
    const [checkRadio,setCheckRadio] = useState(false)
    const [radio, setRadio] = useState([])
    const [checkSelect, setCheckSelect] = useState('')
    const [comments, setComments] = useState([])
    const [userInfo, setUserInfo] = useState({})
    const loginUser = useSelector((state) => state?.user?.data)

    const {handleSubmit, register, control, formState: { errors },} = useForm()

    const {id} = useParams()

    useEffect(() => {
        getSessions().then((data) => {
            setSessions(data.filter(item => item?.film_id == id))
           const filmAllInfo = data.filter(item => item?.film_id == id)
            setSelect(uniqBy(filmAllInfo.map(item => {
                const selectDate = {
                    value: moment(item.date_time).format('DD.MM.YYYY'),
                    label: moment(item.date_time).format('DD.MM.YYYY')
                }
                return selectDate
            }),'value'))
        })
    }, [])

    useEffect(() => {
        getFilmId(id).then(setDataFilm)
        getUser().then(setUserInfo)
    },[])

    useEffect(() => {
        getComments(id).then(setComments)
    },[])

    const onSubmit = (data) => {
        const q = sessions.filter(item => moment(item.date_time).format('DD.MM.YYYY') == checkSelect)
        const session = q.filter(item => moment(item.date_time).format('HH:mm') == data.timeCheckbox)[0]
        const newData = {id: session.id, places: data.place}
        postNewTicket(newData).then(()=> window.location.reload())
    }

    const checkNewRadio = (value) =>{
        const filterRadio = sessions.filter(item => moment(item.date_time).format('DD.MM.YYYY') == value)
        setRadio(filterRadio.map(item => moment(item.date_time).format('HH:mm')))
        setCheckRadio(false)
        setPrice('')
        setCheckSelect(value)
    }
    const changeRadio = (time) => {
        setCheckRadio(true)
        const audit = sessions.filter(item => moment(item.date_time).format('DD.MM.YYYY')== checkSelect)
        const setSessionFilm = audit.filter(item => moment(item.date_time).format('HH:mm')== time)[0]
        setPrice(userInfo?.type !==0 ? userInfo?.type == '1' ? setSessionFilm.price - setSessionFilm.price * 0.1 : setSessionFilm.price - setSessionFilm.price * 0.3 : setSessionFilm.price)
        getTicketsPlace(setSessionFilm.id).then(data => {
            const occupiedSeats = data.map(item => item.place)
            const selectedElements = allPlace[setSessionFilm.type - 1].reduce((n, v, i) => {
                const checkI = i <= 6 ? i+1 : i
                if(isObject(v) && !occupiedSeats.includes(checkI)) {
                    return [...n, v]
                }
                if(isObject(v) && occupiedSeats.includes(checkI)) {
                    return [...n, {key: true}]
                }
                const presentCheck = occupiedSeats.includes(checkI)
                return [...n, presentCheck]
            }, [null])
            setPlace(selectedElements)
        })
    }


    if(isNil(dataFilm)){
        return null
    }

    return (
        <Layout>
            <Board data={dataFilm}/>
            <section className="container">
                <h1 className="formTitle">Оберіть місця</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="filmTicket">
                    <div className="filmTicketItem">
                        <div className="filmTextInner">
                            <p className="formText">Дата</p>
                            <Controller
                                name="dateFilm"
                                control={control}
                                rules={{required: true}}
                                render={({field}) => <Select {...field} onChange={item => {
                                    checkNewRadio(item?.value)
                                    field.onChange(item)
                                }} options={select}  />}
                            />
                        </div>
                        <div className="formInnerTimeCheckbox">{!isEmpty(radio) ? <Controller name='timeCheckbox' control={control} render={({field}) =>
                            radio.map((item, index, rand= random(0,100000000).toString()) => {
                                return <label key={item + rand} className="formRadioText"><input {...field}
                                                                                          onChange={(e) => {
                                                                                       changeRadio(e.target.value)
                                                                                       field.onChange(e.target.value)
                                                                                   }} className="d-none" type="radio"
                                                                                   value={item}/><span>{item}</span></label>
                            })}/> : <p className="emptyRadio">Select date Film</p>}
                        </div>
                        <div style={{marginBottom: 25}} className="filmTextInner">
                            <p className="formText">Один квиток</p>
                            <p className="filmDate">{price ? `${price} грн` : 'Select place'}</p>
                        </div>
                        {userInfo?.type !==0 ?
                            <div style={{marginBottom: 25}} className="filmTextInner">
                                <p className="formText">Скидка</p>
                                <p className="filmDate">{userInfo?.type == '1' ? '10%' : '30%'}</p>
                            </div> :
                            null}
                        <div style={{marginBottom: 25}} className="filmTextInner">
                            <p className="formText">Вартість</p>
                            <p className="filmDate">{!yourPrice ? 'Select place' : `${yourPrice} грн`}</p>
                        </div>
                        {!isNil(loginUser) && !isEmpty(loginUser) ? <button type="submit" className="formSubmit">Забронювати</button> : null }
                        <h1>Види місць</h1>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <div className="innerHoverPlace">
                                <div className="formPlaceCheck" />
                                <p className="hoverText">Це місця які мають підставку для ваших напоїв, удобні стільці, і недорога ціна.</p>
                            </div>
                            <div className="innerHoverPlace">
                            <div className="formPlaceCheck luxPlaces" />
                                <p className="hoverText">Місця типу люкс, зручне місце з підставкою для ніг, найкращі місця перегляду, відкідні крісла щоб насолоджуватися фільмом лежачи.</p>
                            </div>
                        </div>
                    </div>
                    <div className="formPlace">{!checkRadio ? <p className="emptyPlace">Please select all settings</p> : [...place.slice(0,7), null, ...place.slice(8) ].map((bool, index) => {
                        return <div><input {...register(`place`)}
                               className={!isObject(bool) ? 'formPlaceCheck' : 'formPlaceCheck luxPlaces'}
                               style={isNil(bool) ? {visibility: 'hidden'} : {}} onChange={(e) => {
                            e?.target?.checked ?
                                setYourPrice(oldState => Number(oldState) + Number(!isObject(bool) ? price : 500)) : setYourPrice(oldState => Number(oldState) - Number(!isObject(bool) ? price : 500))
                        }} key={index + 1} disabled={!isObject(bool) && bool || isNil(bool) || !isEmpty(bool) ? true : false}
                               value={index >= 8 ? Number(index - 1) : Number(index)} type="checkbox"/>
                        </div>
                    })}
                    </div>
                </form>
                <h1 className="titleComment">Comments</h1>
                {comments?.map(itemComment =>
                    <div className="comments">
                        <div className="innerInfoUser">
                            <img
                                src={isNil(itemComment.avatar) ? "/image/logoProfile.png" : itemComment.avatar}
                                alt=""
                                className="avatarUser"/>
                            <p className="userName">{itemComment.username}</p>
                        </div>
                        <p className="userMessage">{itemComment?.comment}</p>
                    </div>
                )}{loginUser ? <FormComment setComments={setComments} id={id} /> : null}
            </section>
        </Layout>
    )
}

export default FilmPage