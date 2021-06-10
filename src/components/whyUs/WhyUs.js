import {Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import "./WhyUs.css"
import SchoolIcon from '@material-ui/icons/School';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';

export default function WhyUs() {
    return (
            <Grid container spacing={2} style={{background:"#000",color:"#fff"}}>
                
                <Grid item xs={12} sm={4} className="features" style={{padding:"3rem"}}>
                    <i>
                        <SchoolIcon/>
                    </i>
                    <p>
                        We only sell books of Little Flower School so there won't be any mistakes while providing the book.
                    </p>
                </Grid>
                <Grid item xs={12} sm={4} className="features" style={{padding:"3rem"}}>
                    <i>
                        <LocationOnIcon/>
                    </i>
                    <p>
                        Our Shop is located just infront of the school so customers won't have problem finding or contacting us.
                    </p>
                </Grid>
                <Grid item xs={12} sm={4} className="features" style={{padding:"3rem"}}>
                    <i>
                        <AlarmOnIcon/>
                    </i>
                    <p>
                        Customers can come at anytime and any day for buying goods. We are always available for the service.
                    </p>

                </Grid>
                <Grid item xs={12} style={{textAlign:"center",padding:"2rem"}} >
                    <Typography variant="h3">
                        What are you still waiting for ???
                    </Typography>
                    <a href="/books" style={{padding:"1rem",textDecoration:"none"}}>
                    <Button variant="contained" style={{backgroundColor:"#f17373", width:"50%", fontSize:"1.2rem",margin:"2rem",color:"white"}}>
                        Order Now
                    </Button>
                    </a>

                </Grid>
                
            </Grid>
    )
}

<section class="section--primary">
  <div class="container">
    <div class="col-3 features">
      <i class="fa fa-bolt"></i>
      <p>
        Product so awesome. Makes you awesome - go buy!
      </p>
    </div>
    <div class="col-3 features">
      <i class="fa fa-bank"></i>
      <p>
        Product so great. Makes you even greater - go buy now. Super cheap deal!
      </p>
    </div>
    <div class="col-3 features">
      <i class="fa fa-heart"></i>
      <p>
        Feel lonely? Go buy product and have a friend! 
      </p>
    </div>
  </div>
</section>
