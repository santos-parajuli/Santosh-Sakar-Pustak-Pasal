import { Container, CssBaseline, Grid } from '@material-ui/core';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import NoticeCard from '../shared/noticeCard/NoticeCard';
import SwiperCore, {Navigation,Pagination,Autoplay  } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation,Pagination,Autoplay]);

var data=[
    {
        photoURL:"https://i.imgur.com/Q7t5H3e.png",
        news:"अहिले कोरोनाको समयमा सबैको स्वस्थलाइ ख्यालमा राखी हामीले ऊपयुक्त  साभधानीको साथमा ग्राहकको लागि सजिलो बनाउन फोनबाट अथवा नेटबाट अडर गरेर हजुरहरुको समय मिलाई साबधानीको साथ कपि किताब ऊपलब्ध गराउनि निधय गरेको छौ।  तसर्थ हजुरहरुले घरबाटै किताबको बारेमा जानकारी पाउन हाम्रो सम्पर्क नम्बरमा [९८४५०८२७३८ ,९८१७२२८९४६ ] कल गरि अडर दिन सक्नु हुनेछ। "
},
{
    photoURL:"https://i.imgur.com/xrssxDd.png",
    news:"हामी कहाँ सबै प्रकारको स्टेशनरीको सामान पाइनुको साथै लिटिल फ्लवार स्कुलको ड्रेसहरु पनि पाइन्छ।  स्कुल अगाडी भएको हुनाले  सबै सामान एकै ठाउँमा उपलब्ध गराई ग्राहकहरुको लागि सहज बनाऊने प्रयास हामीले गरेको छौ। " 
}

]

export default function Carousal() {
    return (
        <CssBaseline>
        <Container style={{zIndex:"-100"}}>
            <Grid container justify="center">
                 <br/>
                </Grid>
            <Swiper
            slidesPerView={1}
            navigation
            lazy={{loadPrevNext:true}}
            autoplay={{delay:10000}}
            pagination={{clickable:true}}
            loop="true"
            >
                {
                    data.map((value)=>{
                        return <SwiperSlide key={value.photoURL}><NoticeCard data={value}/></SwiperSlide>
                })
                }
            </Swiper>
        </Container>
        </CssBaseline>
    )
}
