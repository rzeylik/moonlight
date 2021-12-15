import React, {useEffect, useState} from 'react'
import {isEmpty, isNil} from "lodash"
import {useForm, Controller} from "react-hook-form";
import moment from "moment";
import {Link} from "react-router-dom"
import InputRange from 'react-input-range';
import {getFilmByData} from "../../service/films"

import {getFilmsAll} from "../../api/films"
import {TODAY, TOMORROW} from "../../utils/constants"
import {formFilm} from "../../Router";
import SlickSlider from "../../components/SlickSlider"
import FilmModal from "../../components/FilmModal"
import Layout from '../../components/Layout'
import Board from "../../components/Board"

import 'react-input-range/lib/css/index.css';
import './styles.css'

const Home = () => {
    const [filmToday, setFilmToday] = useState(null)
    const [filmTomorrow, setFilmTomorrow] = useState(null)
    const [openFilmModal, setOpenFilmModal] = useState(false)
    const [fileDate, setFilmDate] = useState([])
    const [allFilms, setAllFilms] = useState([])
    const[filtersFilm, setFiltersFilm] = useState([])
    const [filmRange, setFilmRange] = useState({min: 0, max: 500})
    const {handleSubmit, control} = useForm()
    const dataSpanToday = [
        {
            left: '20%',
            value: '10:00',
            filmDate: filmToday,
        },
        {
            left: '40%',
            value: '12:00',
            filmDate: filmToday,
        },
        {
            left: '60%',
            value: '16:00',
            filmDate: filmToday,
        },
        {
            left: '80%',
            value: '20:00',
            filmDate: filmToday,
        }
    ]

    const dataSpanTomorrow = [
        {
            left: '20%',
            value: '10:00',
            filmDate: filmTomorrow,
        },
        {
            left: '40%',
            value: '12:00',
            filmDate: filmTomorrow,
        },
        {
            left: '60%',
            value: '16:00',
            filmDate: filmTomorrow,
        },
        {
            left: '80%',
            value: '20:00',
            filmDate: filmTomorrow,
        }
    ]

    useEffect(() => {
        getFilmByData(TODAY).then(setFilmToday)
        getFilmByData(TOMORROW).then(setFilmTomorrow)
        getFilmsAll().then((data) => {
            setAllFilms(data.filter((item) => item.publish_year >= moment().format('YYYY')))
            setFiltersFilm(data.filter((item) => item.publish_year >= moment().format('YYYY')))
        })
    }, [])
    if (isNil(filmToday)){
        return null
    }

    const Films = ({data}) =>{
        return  <Link to={formFilm(data?.id)}><img src={data?.small_image} alt="" className="filmImg"/></Link>
    }

    const SpanGenerator = ({left, value, day,showDay}) => <div className='spanBtn' style={{left}}><button className='spanBtn' style={{bottom: 0}} value={value} onClick={(e) => openModal(e?.target?.value, day,showDay)}/> <span className="spanTime">{value}</span></div>


    const openModal = (value, day, showDay) => {
        setFilmDate(day.reduce((prev, curr) => {
            const newSessions = curr.sessions.filter(item => moment(item.date_time).format('HH:mm') == value && moment(item.date_time).format('DD.MM.YYYY') == showDay)
            if(newSessions.length < 1){
                return prev
            }
            return [...prev, {...curr, sessions: newSessions}]
        }, []))
        setOpenFilmModal(true)
    }

    const onSubmitFilter = (dataFilter) =>{
        const a = moment(dataFilter?.filterDate).format("DD.MM.YYYY")
        getFilmByData(a).then((data) => {
            setFiltersFilm(data.reduce((prev, curr) => {
                const check = curr.sessions?.filter(item => item.price >= dataFilter.filterPrice.min && item.price <= dataFilter.filterPrice.max)
                if (!isEmpty(check)) {
                    return [...prev, curr]
                }
                return prev
            }, []))
        })
    }


    return (
      <Layout>
          <section className="homeSlider">
              <SlickSlider Item={Board} data={filmToday} />
          </section>
          <section className="homeFilms">
              <div className="container">
                  <h1 className="titleSessions">Найближчі сеанси</h1>
                  <div className="wrapperSessions">
                      <div className="innerDaySession">
                          <p className="dayShow">Сьогодні</p>
                          <div className='innerSpan'>
                              {dataSpanToday.map(item => <SpanGenerator showDay={TODAY} value={item?.value} day={item?.filmDate} left={item?.left} />)}
                          </div>
                          <p className="smallDate">{TODAY}</p>
                      </div>
                      <div className="innerDaySession secondMargin">
                          <p className="dayShow">Завтра</p>
                          <div className='innerSpan'>
                              {dataSpanTomorrow.map(item => <SpanGenerator showDay={TOMORROW} value={item?.value} day={item?.filmDate} left={item?.left} />)}
                          </div>
                          <p className="smallDate">{TOMORROW}</p>
                      </div>
                  </div>
                  <p className="filmsTitle">Найближчі сеанси</p>
                <SlickSlider fade={false} data={allFilms} Item={Films} countElement={allFilms.length < 6 ? allFilms.length : 6} />
              </div>
          </section>
          <section className="filterFilm container">
              <h1 className="filterTitle">Filter</h1>
              <form onSubmit={handleSubmit(onSubmitFilter)} className="filterForm">
                <Controller
                    name="filterDate"
                    control={control}
                    defaultValue={moment().format('YYYY-MM-DD')}
                    render={({field}) =>
                        <div className='innerRange'>
                            <p className="labelTextRange">Date</p>
                            <input {...field} type="date"/>
                        </div>}
                />
                  <div className="innerRangeStyle">
                      <Controller
                          name="filterPrice"
                          control={control}
                          defaultValue={filmRange}
                          render={({field}) =>
                              <div className='innerRange'>
                                  <p className="labelTextRange">Price</p>
                                  <InputRange
                                  maxValue={500}
                                  minValue={0}
                                  formatLabel={value => `${value}`}
                                  value={filmRange}
                                  onChange={value => {
                                      field.onChange(value)
                                      setFilmRange(value)
                                  }} />
                              </div>
                          }
                      />
                  </div>
                  <button className="filterBtn" type="submit">Filter</button>
              </form>
              <div className="innerFiltersFilm">
                 {isEmpty(filtersFilm) ? <div className="emptyFilm"><img src="/image/EmptyTicket.svg" alt=""/><p>Таких фільмів на даний час не існує</p></div> : filtersFilm.map(item => <Films data={item} />)}
              </div>
          </section>
          <FilmModal openFilmModal={openFilmModal} setOpenFilmModal={setOpenFilmModal} dataTime={fileDate} />
      </Layout>
    )
}
export default Home
