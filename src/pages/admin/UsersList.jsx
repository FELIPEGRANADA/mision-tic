import React from 'react';
import '../../styles/UsersList.css';
import UserForm from './UserForm';

// Constants to connect to database
const BASE_URL = process.env.REACT_APP_API_URL;
const PATH_USERS = 'users';

// Class UsersList Component 
class UsersList extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.registerUser = this.registerUser.bind(this);
        this.state = {selectedComponent: 1, 
                      data: [],
                      modeForm: 0,
                      _id: ""
                     };
    }

    // Before show the component
    componentDidMount() {
        this.getUsers();
    }

    // Show User Register Form in Register Mode
    registerUser(){
        this.setState({selectedComponent: 2, modeForm: 1});
    }

    // Show User Register Form in Update Mode
    updateUser = (user) => {
        this.setState({selectedComponent: 2, modeForm: 2, _id: user._id});
    }

    // Delete a user
    removeUser = (user) => {
        let opcion = window.confirm("Are you sure you want to remove the user " + user.user + "?");
        if (opcion) {
            this.deleteUser(user._id)
        }    
    };

    // Method Render the component
    render() {
        let component;
        if(this.state.selectedComponent === 1){
            component = <div className="usersList-box">
                            <div>
                                <h1>Users</h1>
                                <button className="new-user" onClick={this.registerUser}>New +</button>
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
                                    {this.state.data.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user.user}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>{user.rol}</td>
                                            <td>{user.state}</td>
                                            <td><button className="fas fa-edit" onClick={() => this.updateUser(user)}></button></td>
                                            <td><button className="fas fa-trash-alt" onClick={() => this.removeUser(user)}></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>; 
        }
        else if(this.state.selectedComponent === 2){
            component = <UserForm modeForm={this.state.modeForm} _id={this.state._id}/>;   
        }

        return(
            component
        );
    }
    
    // CRUD
    // Call API service (Method GET)
    getUsers() {
        fetch(`${BASE_URL}${PATH_USERS}`)
          .then(result => result.json())
          .then(
            (result) => {
              this.setState({ data: result});
            },
            // Nota: es importante manejar errores aquí y no en 
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => {
              console.log(error);
            }
        )
    }

      // Call API service (Method DELETE)
    deleteUser(id) {
        const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        };
        fetch(`${BASE_URL}${PATH_USERS}/${id}`, requestOptions)
          .then(result => result.json())
          .then(
            (result) => {
              this.getUsers();
            },
            (error) => {
              console.log(error);
            }
        );
    }
}
  
export default UsersList;