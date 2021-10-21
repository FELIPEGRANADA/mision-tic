import React from 'react';
import '../../styles/OrderDetail.css';
import OrdersList from './OrdersList';

// Class OrderDetail Component 
class OrderDetail extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listOrders = this.listOrders.bind(this);
        this.state={selectedComponent: 1,
                    order: {code: props.order.code, 
                            total: props.order.total, 
                            registerDate: props.order.registerDate
                           } 
                   };
    }

    // Show list orders
    listOrders(){
        this.setState({selectedComponent: 2})
    }

    // Method Render the component
    render() {
        let component;
        if(this.state.selectedComponent === 1){
            component = <div className="orderDetail-box">
                            <div>
                                <h1>Order Detail # {this.state.order.code}</h1>
                                <h4>Total {this.state.order.total}</h4>
                                <h4>Register Date {this.state.order.registerDate}</h4>
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
                            <button className="orderDetail-button" onClick={this.listOrders}>Back</button>
                        </div>
        }
        else if (this.state.selectedComponent === 2)
        {
            component = <OrdersList />
        }
            return(
                component
            );      
    }
}
  
export default OrderDetail;