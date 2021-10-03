import React from 'react';
import '../styles/UsersList.css';
import UserForm from './UserForm';

const dataLoad = [
    { code: 1, user: "HHOSTOS", email: "hhostos@udea.edu.co", password: 12345, rol: "administrador", state: "Autorizado"},
    { code:2, user: "YSUAREZ", email: "ysuarez@udea.edu.co", password: 546321, rol: "vendedor", state: "Pendiente"}
  ];

// Class UsersList Component 
class UsersList extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.registerUser = this.registerUser.bind(this);
        this.state = {selectedComponent: 1, 
                      data: dataLoad
                     };
    }

    // Show User Register Form
    registerUser(){
        this.setState({selectedComponent: 2});
    }

    // Method Render the component
    render() {
        let component;
        if(this.state.selectedComponent === 1){
            component = <TableUsers onClickNew={this.registerUser} dataTable={this.state.data}/>; 
        }
        else if(this.state.selectedComponent === 2){
            component = <UserForm />;   
        }

        return(
            component
        );
    }    
}

// TableUsers Component
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
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {props.dataTable.map((user) => (
                        <tr key={user.code}>
                            <td>{user.user}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.rol}</td>
                            <td>{user.state}</td>
                            <td><button className="fas fa-edit" onClick={props.onClickNew}></button></td>
                            <td><button className="fas fa-trash-alt"></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );       
}
  
export default UsersList;