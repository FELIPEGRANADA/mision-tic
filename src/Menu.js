import React from 'react';
import './Menu.css';
import logo from './Media/Logo.png';
import OrdersList from './OrdersList';
import ProductsList from './ProductsList';
import UsersList from './UsersList';

// Class Menu Component 
class Menu extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.state = {selectedMenu: <OrdersList/>, 
                      classOrders: "menu-selected", 
                      classProducts: "menu-button", 
                      classUsers: "menu-button"
                     };
        this.showOrders = this.showOrders.bind(this);
        this.showProducts = this.showProducts.bind(this);
        this.showUsers = this.showUsers.bind(this);
    }

    // Show list orders
    showOrders(){
        this.setState({selectedMenu: <OrdersList/>, 
                       classOrders: "menu-selected", 
                       classProducts: "menu-button", 
                       classUsers: "menu-button"
                       });
    }

    // Show list products
    showProducts(){
            this.setState({selectedMenu: <ProductsList/>, 
                           classOrders: "menu-button", 
                           classProducts: "menu-selected", 
                           classUsers: "menu-button"
                           });
    }

    // Show list users
    showUsers(){
        this.setState({selectedMenu: <UsersList/>, 
                       classOrders: "menu-button", 
                       classProducts: "menu-button", 
                       classUsers: "menu-selected"
                       });
    }

    // Method Render the component
    render() {
            return (
                <div className="menu-box">
                    <div className="menuitem-box">
                        <img className= "logo" src ={logo} alt="Terrier beverages logo"/>
                        <button className={this.state.classOrders} onClick={this.showOrders}>Orders</button>
                        <button className={this.state.classProducts} onClick={this.showProducts}>Products</button>
                        <button className={this.state.classUsers} onClick={this.showUsers}>Users</button>           
                    </div>
                    <div className="content-box">
                        {this.state.selectedMenu}                       
                    </div>
                </div>             
            );

    }
}
  
export default Menu;