import React from 'react';
import '../../styles/OrderForm.css';
import OrdersList from './OrdersList';

// Class OrderForm Component 
class OrderForm extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listOrders = this.listOrders.bind(this);
        this.state={selectedComponent: <FormComponent onClickRegister={this.listOrders}/>};
    }

    // Show list orders
    listOrders(){
        this.setState({selectedComponent: <OrdersList/>})
    }

    // Method Render the component
    render(){
            return(
                this.state.selectedComponent
            );
    }
}

// Form Component
function FormComponent(props){
    return(
        <div className="orderForm-box">
            <h1>Register Order</h1>
            <form>
                <label><b>Code</b></label>  
                <input className="orderForm-input" type="text" placeholder="Enter Code" />
                <label><b>Total</b></label> 
                <input className="orderForm-input" type = "text" placeholder="Enter Total" />
                <label><b>Start Date</b></label> 
                <input className="orderForm-input" type = "date"/>
                <label><b>Customer</b></label> 
                <input className="orderForm-input" type = "text" placeholder="Enter Identification" />
                <input className="orderForm-input" type = "text" placeholder="Enter Name" />
                <label><b>Salesman</b></label> 
                <select className="orderForm-input" name="Salesman">
                </select>
                <div className="button-box">
                    <button className="orderForm-button" onClick={props.onClickRegister}>Register</button>
                    <button className="orderForm-button" onClick={props.onClickRegister}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default OrderForm;