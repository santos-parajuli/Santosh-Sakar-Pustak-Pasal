import { Container,Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import Card from './shared/card/Card'
var data = ["Specific Book","Nursery","LKG","UKG","Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8","Class 9","Class 10", ]
export default class BookList extends Component {
    
    componentDidMount(){
        document.title="Buy Books"
    }
    render() {
        return (
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} style={{textAlign:"center",padding:"1rem"}}>
                        <Typography variant="h2"> CHOOSE THE CLASS</Typography>
                    </Grid>
                    {
                        data.map((val)=>{
                            return <Grid key={val} item xs={12} sm={6} md={4}>
                            <Card data={val}/>
                        </Grid>
                        })
                    }
                </Grid>
            </Container>
        )
    }
}
