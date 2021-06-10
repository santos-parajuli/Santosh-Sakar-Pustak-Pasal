import {Grid } from '@material-ui/core'
import React from 'react'
import "./NoticeCard.css"

export default function NoticeCard(props) {
    return (
                    <Grid container justify="center" style={{boxSizing:"none"}}>
                        <Grid item>
                        <article className="notice-card">
                            <div className="notice-card__background">
                            <div className="card__background--wrapper">
                                <div className="card__background--main" style={{backgroundImage:`url(${props.data.photoURL})`,backgroundPosition:"top",backgroundSize:"contain",backgroundRepeat:"repeat-y"}}>
                                <div className="card__background--layer"></div>
                                </div>
                            </div>
                            </div>
                            <div className="notice-card__head">
                            
                            </div>
                            <div className="notice-card__info">
                            <h3>Santosh Sakar Pustak Pasal,Narayangarh</h3>  
                            <p style={{fontSize:"16px"}}>
                                {props.data.news}
                            </p>            </div>
                        </article>
                        </Grid> 
                    </Grid>
              
    )
}
