import React from 'react';
// import RegistrationForm from './RegistrationForm';

class DisplayData extends React.Component {

render(){   
    return(
     <table>
         <thead>
             <tr>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Image</th>
                 <th>Mobile No</th>
                 <th>ID</th>
                 <th>Address</th>
             </tr>
         </thead>
         <tbody>
            
             {/* {props.data.map(row => (
                 <tr>{row.firstName}</tr>
             ))} */}
              <tr>
               <td>
               {this.props.MyFirstName}
              
               </td>
            <td>{this.props.MySecondName}</td>
            <td>{this.props.MyMobileNo}</td>
              </tr>
           <td>{this.props.MyImage}</td>
           <td>{this.props.MyEmail}</td>
           <td>{this.props.MyAddress}</td>
         </tbody>   
     </table>
    );
}
}

export default DisplayData;