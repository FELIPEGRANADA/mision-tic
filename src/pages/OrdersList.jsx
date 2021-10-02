import React from 'react';
import '../styles/OrdersList.css';
import OrderForm from './OrderForm';
import OrderDetail from './OrderDetail';

const dataLoad = [
    { code: 1, total: 259000, registerDate: "25/07/2021", identification: "123456", name: "Yerson", salesman: "Carlos" },
    { code: 2, total: 280000, registerDate: "25/08/2021", identification: "654321", name: "Lina", salesman: "Alfredo" },
    { code: 3, total: 325000, registerDate: "25/09/2021", identification: "852963", name: "Jorge", salesman: "Carlos" },
    { code: 4, total: 157000, registerDate: "16/08/2021", identification: "369258", name: "Hector", salesman: "Alfredo" },
    { code: 5, total: 264000, registerDate: "06/07/2021", identification: "147258", name: "Felipe", salesman: "Alfredo" }
  ];

// Class OrdersList Component 
class OrdersList extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.registerOrder = this.registerOrder.bind(this);
        this.state = {selectedComponent: 1,
                      data: dataLoad,
                      selectedOrder:{code: "", 
                                     total: "", 
                                     registerDate: "", 
                                     identification: "", 
                                     name: "", 
                                     salesman: ""
                                    }                     
                    };
    }

    // Show Order Register Form
    registerOrder(){
        this.setState({selectedComponent: 2});
    }

    // Show Order Detail
    detailOrder = (order) => {
        this.setState({selectedComponent: 3, 
                       selectedOrder:{code: order.code, 
                                      total: order.total, 
                                      registerDate: order.registerDate, 
                                      identification: order.identification, 
                                      name: order.name, 
                                      salesman: order.salesman
                                     }          
                      });
    }

    // Method Render the component
    render() {
        let component;
        if(this.state.selectedComponent === 1){
            component = <div className="ordersList-box">
                            <div>
                                <h1>Orders</h1>
                                <button className="new-order" onClick={this.registerOrder}>New +</button>
                            </div>
                            <table className="table-bordered">
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Total</th>
                                        <th>Register Date</th>
                                        <th>Identification</th>
                                        <th>Name</th>
                                        <th>Details</th>
                                        <th>Salesman</th>
                                        <th>Edit</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((order) => (
                                        <tr key={order.code}>
                                            <td>{order.code}</td>
                                            <td>{order.total}</td>
                                            <td>{order.registerDate}</td>
                                            <td>{order.identification}</td>
                                            <td>{order.name}</td>
                                            <td><button className="button button-details" onClick={() => this.detailOrder(order)}></button></td>
                                            <td>{order.salesman}</td>
                                            <td><button className="button button-edit" onClick={this.registerOrder}></button></td>
                                            <td><button className="button button-remove"></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div> 
        }
        else if(this.state.selectedComponent === 2){
            component = <OrderForm />;   
        }
        else if(this.state.selectedComponent === 3){
            component =  <OrderDetail order={this.state.selectedOrder}/>;
        }

        return(
            component   
        );
    }
}
  
export default OrdersList;