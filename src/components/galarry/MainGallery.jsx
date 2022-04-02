import React from 'react'
import Gallery from 'react-grid-gallery';
import Header from '../header/Header';
import classes from './Gallery.module.css';

import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import img7 from '../img/7.jpg'
import img8 from '../img/8.jpg'
import img9 from '../img/9.jpg'
import img10 from '../img/10.jpg'
import img11 from '../img/11.jpg'


export default function MainGallery() {

    const IMAGES =
[
    {
        src: `${img1}`,
        thumbnail: `${img1}`,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)",
},
{
    src: `${img2}`,
    thumbnail: `${img2}`,
    thumbnailWidth: 300,
    thumbnailHeight: 300,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)",
},
    {
        src: `${img3}`,
        thumbnail: `${img3}`,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)",
},
    {
        src: `${img4}`,
        thumbnail: `${img4}`,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)",
},
    {
        src: `${img5}`,
        thumbnail: `${img5}`,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)",
},
    {
        src: `${img6}`,
        thumbnail: `${img6}`,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)",
},
    {
        src: `${img7}`,
        thumbnail: `${img7}`,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)",
},
    {
        src: `${img8}`,
        thumbnail: `${img8}`,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)",
},
    {
        src: `${img9}`,
        thumbnail: `${img9}`,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)",
},
    {
        src: `${img10}`,
        thumbnail: `${img10}`,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)",
},
    {
        src: `${img11}`,
        thumbnail: `${img11}`,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)",
}
  
]

  return (
    <div className={classes.wrapper}>
            <div className={classes.container}>
            <Header/>
        <Gallery images={IMAGES} backdropClosesModal={true} rowHeight={400}  lightboxWidth={3000}/>
            </div>
       
    </div>
  )
}
