import React from 'react';
import '../../styles/UserForm.css';
import UsersList from './UsersList';

// Constants to connect to database
const BASE_URL = process.env.REACT_APP_API_URL;
const PATH_USERS = 'users';

// Class UserForm Component 
class UserForm extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listUsers = this.listUsers.bind(this);
        this.state={selectedComponent: 1,
                    modeForm: this.props.modeForm,
                    _id: this.props._id,
                    form: {
                        user : "",
                        email : "",
                        password : "",
                        rol : "administrador",
                        state : "pendiente"
                    }
        };
    }

    // Before show the component
    componentDidMount() {
        // Mode Update User
        if(this.state.modeForm === 2){
            this.getUserById(this.state._id);
        }
    }

    // Show list users
    listUsers(){
        this.setState({selectedComponent: 2})
    }

    // Cancel Action Form
    cancelForm = (e) => {
        e.preventDefault();
        this.listUsers();
    }

    // Add a user 
    addUser = (e) => {
        e.preventDefault();
        // New user from Form
        let user = {...this.state.form};
        console.log(user);
        this.createUser(user);        
    }

    // Modify a user 
    modifyUser = (e) => {
        e.preventDefault();
        // Updated information user from Form
        let user = {...this.state.form};
        console.log(user);
        this.updateUser(user);        
    }

     // Get changes over the form's fields
     handleChange = (e) => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
    };

    // Method Render the component
    render(){
        let formTitle, submitButton, formEvent, userinput;
        // Mode register user
        if(this.state.modeForm === 1){
            formTitle = <h1>Register User</h1>;
            formEvent = this.addUser;
            submitButton = <button className="userForm-button" type="submit">Register</button>;
            userinput = <input className="userForm-input"
                               name="user" 
                               type="text" 
                               placeholder="Enter User Name"
                               onChange={this.handleChange}
                               value={this.state.form.user}
                               required 
                        />; 
        }
        // Mode update user
        else if(this.state.modeForm === 2){
            formTitle = <h1>Update User</h1>;
            formEvent = this.modifyUser;
            submitButton = <button className="userForm-button" type="submit">Update</button>;
            userinput = <input className="userForm-input read-only-input"
                               name="user" 
                               type="text" 
                               placeholder="Enter User Name"
                               onChange={this.handleChange}
                               value={this.state.form.user}
                               required
                               readOnly 
                        />; 
        }

        let component;
        if(this.state.selectedComponent === 1){
            component = <div className="userForm-box">
                            {formTitle}
                            <form onSubmit={formEvent}>
                                <label><b>User</b></label>  
                                {userinput}
                                <label><b>Email</b></label> 
                                <input className="userForm-input"
                                       name="email"  
                                       type = "text" 
                                       placeholder="Enter Email"
                                       onChange={this.handleChange}
                                       value={this.state.form.email}
                                       required 
                                />
                                <label><b>Password</b></label> 
                                <input className="userForm-input"
                                       name="password" 
                                       type = "password" 
                                       placeholder="Enter Password" 
                                       onChange={this.handleChange}
                                       value={this.state.form.password}
                                       required
                                />
                                <label><b>Rol</b></label> 
                                <select className="userForm-input" 
                                        name="rol"
                                        onChange={this.handleChange}
                                        value={this.state.form.rol}
                                >
                                    <option value="administrador">Administrador</option>
                                    <option value="vendedor">Vendedor</option>
                                </select>
                                <label><b>State</b></label> 
                                <select className="userForm-input" 
                                        name="state"
                                        onChange={this.handleChange}
                                        value={this.state.form.state}
                                >
                                    <option value="pendiente">Pendiente</option>
                                    <option value="autorizado">Autorizado</option>
                                    <option value="no autorizado">No autorizado</option>     
                                </select>
                                <div className="button-box">
                                    {submitButton}
                                    <button className="userForm-button" onClick={this.cancelForm}>Cancel</button>
                                </div>
                            </form>
                        </div>
        }
        else if(this.state.selectedComponent === 2){
            component = <UsersList />;   
        }
        return(
            component
        );
    }

    // CRUD
    // Call API service (Method POST)
    createUser(user) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        };
        fetch(`${BASE_URL}${PATH_USERS}`, requestOptions)
          .then(result => result.json())
          .then(
            (result) => {
              // List users  
              this.listUsers();
            },
            (error) => {
              console.log(error);
            }
          );
      }

    // Call API service (Method GET by Id)
    getUserById(id) {
    fetch(`${BASE_URL}${PATH_USERS}/${id}`)
        .then(result => result.json())
        .then(
        (result) => {
            this.setState({ form: result});
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
            console.log(error);
        }
        )
    }

    // Call API service (Method PUT)
    updateUser(user) {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        };
        fetch(`${BASE_URL}${PATH_USERS}/${user._id}`, requestOptions)
          .then(result => result.json())
          .then(
            (result) => {
              // List users
              this.listUsers();
            },
            (error) => {
              console.log(error);
            }
          );
      }
}

export default UserForm;