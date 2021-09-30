import React from 'react';
import './OrderForm.css';
import OrdersList from './OrdersList';

class OrderForm extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listOrders = this.listOrders.bind(this);
        this.state={isListOrders:false};
    }

    listOrders(){
        this.setState({isListOrders:true})
    }

    render(){
        if(this.state.isListOrders === false)
        {
            return(
                <FormComponent onClickRegister={this.listOrders}/>
            );
        }
        else{
            return(
                <OrdersList/>
            );
        }
    }
}

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