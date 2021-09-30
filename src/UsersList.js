import React from 'react';
import './UsersList.css';
import UserForm from './UserForm';

// Class Component UsersList
class UsersList extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.registerUser = this.registerUser.bind(this);
        this.state = {isRegisterUser: false};
    }

    registerUser(){
        this.setState({isRegisterUser: true});
    }

    render() {
        if(this.state.isRegisterUser === false)
        {
            return(
                <TableUsers onClickNew={this.registerUser}/>
            );
        }
        else{
            return(
              <UserForm />  
            );
        }
    }
}

function TableUsers(props){
    return(
        <div className="usersList-box">
            <div>
                <h1>Users</h1>
                <button className="new-user" onClick={props.onClickNew}>New +</button>
            </div>
            <table className="table-bordered">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Rol</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HHOSTOS</td>
                        <td>hhostos@udea.edu.co</td>
                        <td>12345</td>
                        <td>Administrador</td>
                        <td>Autorizado</td>
                    </tr>
                    <tr>
                        <td>YSUAREZ</td>
                        <td>ysuarez@udea.edu.co</td>
                        <td>546321</td>
                        <td>Vendedor</td>
                        <td>Pendiente</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );       
}
  
export default UsersList;