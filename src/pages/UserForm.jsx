import React from 'react';
import '../styles/UserForm.css';
import UsersList from './UsersList';

// Class UserForm Component 
class UserForm extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listUsers = this.listUsers.bind(this);
        this.state={selectedComponent: <ComponentForm onClickRegister={this.listUsers} />};
    }

    // Show list users
    listUsers(){
        this.setState({selectedComponent: <UsersList />})
    }

    // Method Render the component
    render(){
        return(
            this.state.selectedComponent
        );
    }
}

// Form Component
function ComponentForm(props){
    return(
        <div className="userForm-box">
            <h1>Register User</h1>
            <form>
                <label><b>User</b></label>  
                <input className="userForm-input" type="text" placeholder="Enter User Name" />
                <label><b>Email</b></label> 
                <input className="userForm-input" type = "text" placeholder="Enter Email" />
                <label><b>Password</b></label> 
                <input className="userForm-input" type = "text" placeholder="Enter Password" />
                <label><b>Rol</b></label> 
                <select className="userForm-input" name="Rol">
                </select>
                <label><b>State</b></label> 
                <select className="userForm-input" name="State">
                </select>
                <div className="button-box">
                    <button className="userForm-button" onClick={props.onClickRegister}>Register</button>
                    <button className="userForm-button" onClick={props.onClickRegister}>Cancel</button>
                </div>
            </form>
        </div>
    );    
}

export default UserForm;