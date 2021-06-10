
import React, { Component } from 'react'
import { Container, TextField, Typography,Button, InputLabel, Select, MenuItem, FormControl, FormControlLabel, Checkbox, FormGroup } from '@material-ui/core';
import { withRouter } from "react-router";
import SendIcon from '@material-ui/icons/Send';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

class Buy extends Component {
    constructor(props) {
        super(props)
        this.state = {books:[],class:"",uploading:false,open:false,disabled:true, name:"",phone:"",errorText: '', value: props.value,error:false }
        this.bookList = {
          1:["English","Hamro Serofero","Math","Nepali"],
          2:["English","English Grammar","Nepali","Math","Science","Social","G.K","Drawing","Moral Education","Cursive","Computer"],
          3:["English","English Grammar","Nepali","Math","Science","Social","G.K","Drawing","Moral Education","Cursive","Computer"],
          4:["English","English Grammar","Nepali","Math","Science","Social","G.K","Drawing","Moral Education","Cursive","Computer"],
          5:["English","English Grammar","Nepali","Nepali Grammar","Math","Science","Social","G.K","Drawing","Moral Education","Cursive","Computer"],
          6:["English","English Grammar","Nepali","Nepali Grammar","Math","Science","Social","Atlas","H.P","Moral Education","OBT","Computer"],
          7:["English","English Grammar","Nepali","Nepali Grammar","Math","Science","Social","Atlas","H.P","Moral Education","OBT","Computer"],
          8:["English","English Grammar","Nepali","Nepali Grammar","Math","Science","Social","Atlas","H.P","Moral Education","OBT","Computer"],
          9:["English","Nepali","Nepali Grammar","Math","Science","Social","Atlas","H.P","O.Math","Computer"],
          10:["English","Nepali","Nepali Grammar","Math","Science","Social","Atlas","H.P","O.Math","Computer"],
          dummy:[]
        }
    }
    componentDidMount(){
      document.title= this.props.match.params.id + " || Buy Books"
  }
    onChangePhone(event) {
      event.preventDefault();
      const regex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]/);
        if (event.target.value.length===10 && event.target.value.match(regex)) {
          this.setState({ errorText: '',phone: event.target.value,error: false,disabled: false })

        } else {
          this.setState({ errorText: 'Enter Correct phone number',error: true,disabled:true })
        }
      }
      onChangeName(event){
        event.preventDefault();
        this.setState({ name: event.target.value })
      }
      onChangeClass(event){
        event.preventDefault();
        this.setState({ class: event.target.value })
      }
      onChangeBook(event){
        if(this.state.books.indexOf(event.target.name) === -1) {
          this.state.books.push(event.target.name)
        }else{
          this.state.books.pop(event.target.name)
        }
        
      }
      submitData =async(e)=>{
        e.preventDefault();
        this.setState({uploading:true})

        try {
          if(this.props.match.params.id==="Specific Book"){
            await fetch('https://santosh-sakar.herokuapp.com/api/order', {
                method: 'POST',
                body: JSON.stringify({name:this.state.name,phone:this.state.phone,class:this.state.class,books:this.state.books}),
                headers: { 'Content-Type': 'application/json' },
            });
            this.setState({open:true})
          }
          else{
            await fetch('https://santosh-sakar.herokuapp.com/api/order', {
                method: 'POST',
                body: JSON.stringify({name:this.state.name,phone:this.state.phone,class:this.props.match.params.id}),
                headers: { 'Content-Type': 'application/json' },
            });
            this.setState({open:true})
          }
        }
        catch (err) {
            alert("Sorry ! try again");
            this.setState({uploading:false})
        }
        
      }
    render() {
        return (
            <Container>
            <form action="" style={{padding:"2rem"}} onSubmit={this.submitData.bind(this)}>
                <Typography variant="h3"> Buy book of {this.props.match.params.id}</Typography>
                <br/>
                <Typography variant="h6"> Please provide the your contact information.</Typography>
                <TextField style={{margin:"1rem"}} required  variant="outlined" label="Name" onChange={this.onChangeName.bind(this)}/>
                <br/>
                <TextField style={{margin:"1rem"}} required error = {this.state.error} variant="outlined" label="Phone Number" helperText= {this.state.errorText} onChange={this.onChangePhone.bind(this)}/>
                <br/>
                {
                  this.props.match.params.id==="Specific Book" &&
                    <FormControl required style={{minWidth:"223px",marginLeft:"1rem"}}>
                      <InputLabel id="select-label">Class</InputLabel>
                      <Select
                        style={{}}
                        labelId="select-label"
                        id="select"
                        value={this.state.class}
                        onChange={this.onChangeClass.bind(this)}
                      >
                        <MenuItem value={"1"}>ONE</MenuItem>
                        <MenuItem value={"2"}>TWO</MenuItem>
                        <MenuItem value={"3"}>THREE</MenuItem>
                        <MenuItem value={"4"}>FOUR</MenuItem>
                        <MenuItem value={"5"}>FIVE</MenuItem>
                        <MenuItem value={"6"}>SIX</MenuItem>
                        <MenuItem value={"7"}>SEVEN</MenuItem>
                        <MenuItem value={"8"}>EIGHT</MenuItem>
                        <MenuItem value={"9"}>NINE</MenuItem>
                        <MenuItem value={"10"}>TEN</MenuItem>
                      </Select>
                    </FormControl>
                }
                <br/>
                { 
                  Object.keys(this.bookList)[this.state.class] && 
                  <div style={{margin:"1rem"}}>
                    <Typography variant="h5"> Select the book you want to order.</Typography>
                    <FormGroup >
                    {
                      this.bookList[this.state.class].map((subject)=>{
                        return <FormControlLabel key={subject}
                                  control={
                                    <Checkbox
                                      checked={this.state.books[{subject}]}
                                      onChange={this.onChangeBook.bind(this)}
                                      name={subject}
                                      color="primary"
                                    />
                                  }
                                  label={subject}
                                />
                              
                      })
                    }
                    </FormGroup> 
                  </div>
                }
                  
                <br/>
                <Button
                  variant="contained"
                  disabled={this.state.disabled || this.state.uploading}
                  color="primary"
                  type="submit"
                  style={{margin:"1rem",padding:"15px"}}
                  endIcon={<SendIcon/>}
                >
                  {
                    this.state.uploading && "Ordering..." 
                  }
                  {
                    !this.state.uploading && "Order Now" 
                  }
                </Button>
                <Backdrop  open={this.state.uploading}>
                  <CircularProgress color="inherit" />
                </Backdrop>
                <Dialog
                  open={this.state.open}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"BOOK ORDERED......."}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Dear {this.state.name},<br/> Your order for book of {this.props.match.params.id} has been recorded. We will contact you sortly on your number {this.state.phone}.
                      <br/>Thank You.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <a href="/" style={{textDecoration:"none"}}>
                      <Button style={{padding:"10px"}} color="primary" variant="contained" autoFocus >
                        Done
                      </Button>
                    </a>
                  </DialogActions>
                </Dialog>
            </form>
        </Container>
        )
    }
}

export default withRouter(Buy);

