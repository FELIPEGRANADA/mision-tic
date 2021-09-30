import React from 'react';
import './OrderDetail.css';
import OrdersList from './OrdersList';

// Class OrderDetail Component 
class OrderDetail extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listOrders = this.listOrders.bind(this);
        this.state={selectedComponent: <TableDetails onClickBack={this.listOrders} />};
    }

    // Show list orders
    listOrders(){
        this.setState({selectedComponent: <OrdersList />})
    }

    // Method Render the component
    render() {
            return(
                this.state.selectedComponent
            );      
    }
}

// TableDetails Component
function TableDetails(props){
    return(
        <div className="orderDetail-box">
            <div>
                <h1>Order Detail # 1</h1>
                <h4>Total 25900</h4>
                <h4>Start Date 25/07/2021</h4>
                <h2>Productos vendidos</h2>
            </div>
            <table className="table-bordered">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Unit Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Vino</td>
                        <td>2</td>
                        <td>95000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Champagne</td>
                        <td>3</td>
                        <td>254000</td>
                    </tr>
                </tbody>
            </table>
            <button className="orderDetail-button" onClick={props.onClickBack}>Back</button>
        </div>
    );
}
  
export default OrderDetail;