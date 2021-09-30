import React from 'react';
import './UserForm.css';
import UsersList from './UsersList';

class UserForm extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listUsers = this.listUsers.bind(this);
        this.state={isListUsers:false};
    }

    listUsers(){
        this.setState({isListUsers:true})
    }

    render(){
        if(this.state.isListUsers === false)
        {
            return(
                <ComponentForm onClickRegister={this.listUsers}/>
            );
        }
        else{
            return(
                <UsersList/>
            );
        }
    }
}

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