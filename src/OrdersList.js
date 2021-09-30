import React from 'react';
import './OrdersList.css';
import OrderForm from './OrderForm';
import OrderDetail from './OrderDetail';

// Class Component OrdersList
class OrdersList extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.registerOrder = this.registerOrder.bind(this);
        this.detailOrder = this.detailOrder.bind(this);
        this.state = {orderMode: 1};
    }

    registerOrder(){
        this.setState({orderMode: 2});
    }

    detailOrder(){
        this.setState({orderMode: 3});
    }

    render() {
        const orderMode = this.state.orderMode;

        if(orderMode === 1){
            return(
                <TableOrders onClickNew={this.registerOrder} onClickDetail={this.detailOrder}/>
            );
        }
        else if(orderMode === 2){
            return(
                <OrderForm />
            );
        }
        else if(orderMode === 3){
            return(
                <OrderDetail />
            );
        }         
    }
}

function TableOrders(props){
    return(  
        <div className="ordersList-box">
            <div>
                <h1>Orders</h1>
                <button className="new-order" onClick={props.onClickNew}>New +</button>
            </div>
            <table className="table-bordered">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Total</th>
                        <th>Start Date</th>
                        <th>Identification</th>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Salesman</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>25900</td>
                        <td>25/07/2021</td>
                        <td>123456</td>
                        <td>Jorge</td>
                        <td><button className="button-details" onClick={props.onClickDetail}></button></td>
                        <td>Michelle</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>28000</td>
                        <td>25/08/2021</td>
                        <td>654321</td>
                        <td>Lina</td>
                        <td><button className="button-details" onClick={props.onClickDetail}></button></td>
                        <td>Felipe</td>
                    </tr>
                </tbody>
            </table>
        </div>);
}
  
export default OrdersList;