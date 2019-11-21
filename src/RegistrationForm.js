import React from 'react';
import './style.css';
import DisplayData from './DisplayData';

class RegistrationForm extends React.Component {
  employeeDetails: Array;
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fields: {},
      errors: {},
      fname: '',
      lname: '',
      empArr: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  };


  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }
  submit(e) {
    console.log('hi')
    console.log(this.state.fields.empArr.length);
    let tempArray = this.state.empArr.push({ fname: this.state.fields.fname });
    this.setState({ empArr: tempArray });
    console.log(this.state.fields.empArr.length);
  }
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["firstName"] = "";
      fields["lastName"] = "";
      fields["mobileno"] = "";
      fields["emailid"] = "";
      fields["address"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your First Name.";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your Last Name.";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastName"] = "*Please enter alphabet characters only.";
      }
    }



    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }



    this.setState({
      errors: errors
    });
    return formIsValid;


  }


  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <h3>Registration page</h3>
          <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >

            <label>First Name</label>
            <input type="text" name="firstName" value={this.state.fields.firstName} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.firstName}</div>

            <label>Last Name</label>
            <input type="text" name="lastName" value={this.state.fields.lastName} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.lastName}</div>

            <div>
              <input type="file" onChange={this.onChange} />
              {this.state.file && (
                <div style={{ textAlign: "center" }}>
                  <button onClick={this.resetFile}>Remove File</button>
                </div>
              )}
              <img style={{ width: "50%" }} src={this.state.file} />
            </div>
            {/* 
            <input type="file" onChange={this.onImageChange} className="filetype" id="group_image"/> */}


            <label>Mobile No:</label>
            <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.mobileno}</div>

            <label>Email ID:</label>
            <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.emailid}</div>

            <label>Address</label>
            <input type="text" name="address" value={this.state.fields.address} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.address}</div>
            {this.state.fields.lastName}
            <input type="submit" className="button" onClick={this.submit} value="Register" />

            <DisplayData MyFirstName={this.state.fields.firstName}
              MySecondName={this.state.fields.lastName}
              MyImage={this.props.file}
              MyMobileNo={this.state.fields.mobileno}
              MyEmail={this.state.fields.emailid}
              MyAddress={this.state.fields.address} />

          </form>

        </div>
      </div>

    );
  }


}


export default RegistrationForm;