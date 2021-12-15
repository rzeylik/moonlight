import React, {useEffect, useState} from 'react'
import moment from "moment";
import { saveAs } from 'file-saver';
import {
    BorderStyle,
    Document,
    ImageRun,
    Packer,
    Paragraph, Table,
    TableCell,
    TableRow,
    VerticalAlign,
    WidthType,
    Header, HeadingLevel
} from "docx";



import {getImageFilm} from "../../api/films";
import {IMAGE_BASE64} from "../../utils/constants";

import './styles.css'



const ProfileBoard = ({data, deleteTicket}) => {

    const [imagePath, setImagePath] = useState([])
    console.log(data)
    useEffect(() => {
        getImageFilm(data?.small_image).then((data) => setImagePath(data))
    }, [])


    const header = new Table({
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                            bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                            left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                            right: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new ImageRun({
                                        data: Uint8Array.from(atob(IMAGE_BASE64), c =>
                                            c.charCodeAt(0)
                                        ),
                                        transformation: {
                                            width: 100,
                                            height: 100
                                        },
                                        margin: {
                                            right: 4000,
                                            bottom: 1000
                                        }
                                    }),
                                    new Paragraph({
                                        text: "MoonLight",
                                        heading: HeadingLevel.HEADING_1,
                                    }),
                                ],
                                verticalAlign: VerticalAlign.CENTER
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER
                    }),
                ],
                verticalAlign: VerticalAlign.CENTER,
            }),
        ],
        width: {
            size: 10000,
            type: WidthType,
        }
    })


    const table = new Table({
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                            bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                            left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                            right: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new ImageRun({
                                        data: Uint8Array.from(atob(imagePath), c =>
                                            c.charCodeAt(0)
                                        ),
                                        transformation: {
                                            width: 290,
                                            height: 140,
                                            right: 0,
                                        }
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
                            }),
                        ]
                    }),
                    new TableCell({
                        borders: {
                            top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                            bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                            left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                            right: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                        },
                        children: [
                            new Paragraph({text: `Назва фільму ${data?.name}`,
                                heading: HeadingLevel.HEADING_1,
                    }),
                            new Paragraph({text: `Місця на фільм ${data?.places}`,
                                heading: HeadingLevel.HEADING_1,
                    }),
                            new Paragraph({text: `Дата і час ${moment(data?.date_time).format('DD.MM.YYYY HH:mm')}`,
                                heading: HeadingLevel.HEADING_1,}),
                            new Paragraph({text: `Ціна ${data?.price * data?.places.length}`,
                                heading: HeadingLevel.HEADING_1,
                    }),

                        ],
                        verticalAlign: VerticalAlign.CENTER
                    })
                ],
                verticalAlign: VerticalAlign.CENTER,
            }),
        ],
        width: {
            size: 10000,
            type: WidthType,
        }
    })

    const generate = async () => {
       const doc = new Document({
           sections: [
               {
                   children: [
                       header,
                       table,
                   ],
                   width: { size: 1000, type: WidthType.PERCENTAGE }
               }
           ],
       });

       Packer.toBlob(doc).then(blob => {
           saveAs(blob, `${data?.name}-ticket.docx`);
       });
    }
    return(
        <div className="profileSlick">
            <button onClick={() => deleteTicket(data?.key)} className="profileFilmRemoveBtn"><img src="./image/removeFilmProfile.png" alt="" className="profileFilmRemove" /></button>
            <img src={`http://localhost:3000/uploads/${data?.small_image}`} alt="" className="profileListFilm" />
            <div className="profileSlickItem">
                <p className="profileDataTitle">{data?.name}</p>
                    <p className="profileDataPlaces">{data.places.map(item => <div className="itemPlaces">{item}</div>)}</p>
                <div className="profileSlickSupItem">
                    <img style={{marginRight: 15}} src="/image/calendar.png" alt=""/>
                    <p className="profileData">{moment(data?.date_time).format('DD.MM.YYYY HH:mm')}</p>
                </div>
                <div className="innerPriceAll">
                    <p className="profileSlickType">Ціна</p>
                    <div className="innerTextAndBtn">
                        <p className="allPrice">{data?.places.length * data?.price}</p>
                        <button className="generateDocx" onClick={() => generate()}>generate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBoard