import React from 'react';

class Form extends React.Component{
    constructor(){ 
        super();
        this.state = {
            // fields: {},
            // errors: {}
        firstName:'',
        lastName:'',
        number:'',
        email:'',
        address:''
   }
   this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
};

handleChange = (e) =>{
    this.setState({
        [e.target.firstName]:e.target.value,message:''})
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        const validateEmail = (email) => {
            var re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
            return re.test(email);
        }
        if(this.state.email==''||this.state.firstName==''){
            this.setState({message:"All fields are mandatory",textStyle:"danger"})}
            else {
                if(validateEmail(this.state.email)){
                    this.setState({message:"Success",textStyle:"success"})}
                     else{
                         this.setState({message:"Please enter valid email id",textStyle:"danger"})
                     
                }
            }
        }

    

    render(){
        
return(
<React.Fragment>
<form  style={{position:'relative', left:'50px'}} onSubmit={this.handleSubmit}>
    <h5>All fields are manditory</h5>
    <div className="form-group">
    <label>First Name</label>
    <br></br>
    <input className="form-control" name="firstName" placeholder='First Name' value={this.state.firstName} onChange={this.handleChange}></input>
    <br></br>
    <label>Last Name</label>
    <br></br>
    <input className="form-control" placeholder='Last Name' value={this.state.lastName}></input>
    <br></br>
    <label>Number</label>
    <br></br>
    <input className="form-control"placeholder='Number' value={this.state.number}></input>
    <br></br>
    <label>ID</label>
    <br></br>
    <input className="form-control" name="email" type="text" onChange={this.handleChange}  placeholder='email' value={this.state.email}></input>
    <br></br>
    <label>Address</label>
    <br></br>
    <textarea className="form-control" placeholder='Address' value={this.state.address}  />
    <br></br>
    <button type="submit" onClick={this.handleSubmit}>Submit</button>
    </div>
</form>
        </React.Fragment>
        )
    }

}



export default  Form;                                                                                                                                                 
