import React from 'react';
import '../styles/OrdersList.css';
import OrderForm from './OrderForm';
import OrderDetail from './OrderDetail';

// Constants to connect to database
const BASE_URL = process.env.REACT_APP_API_URL;
const PATH_ORDERS = 'orders';

// Class OrdersList Component 
class OrdersList extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.registerOrder = this.registerOrder.bind(this);
        this.showSearchFilter = this.showSearchFilter.bind(this);
        this.state = {
            selectedComponent: 1,
            data: [],
            selectedOrder:{
                code: "", 
                total: "", 
                registerdate: "", 
                identification: "", 
                name: "", 
                salesman: "",
                products: []
            },
            showHideSearchFilter: false,
            modeForm: 0,
            _id: ""                     
        };
    }

    // Before show the component
    componentDidMount() {
        this.getOrders();
    }

    // Show Order Register Form in Register Mode
    registerOrder(){
        this.setState({selectedComponent: 2, modeForm: 1});
    }

    // Show Order Register Form in Update Mode
    updateOrder = (order) => {
        this.setState({selectedComponent: 2, 
                       modeForm: 2,
                       _id: order._id,
                       selectedOrder:{...order}
                    });
    }

    // Delete a product
    removeOrder = (order) => {
        let opcion = window.confirm("Are you sure you want to remove the order " + order.code + "?");
        if (opcion) {
            this.deleteOrder(order._id)
        }    
    };

    // Show Order Detail
    detailOrder = (order) => {
        this.setState({selectedComponent: 3, 
                       selectedOrder:{...order}          
                      });
    }

    // Show search filter
    showSearchFilter(){
        this.setState({showHideSearchFilter: !this.state.showHideSearchFilter});
    }

    // Method Render the component
    render() {
        let component;
        const x = this.state.showHideSearchFilter;
        if(this.state.selectedComponent === 1){
            component = <div className="ordersList-box">
                            <div>
                                <h1>Orders</h1>
                                <button className="button-header" onClick={this.registerOrder}>New +</button>
                                <button className="button-header search" onClick={this.showSearchFilter}>{x ? 'Searching By':'Search'}</button>
                                {
                                    x && (
                                    <select name="searchFilter" placeholder="Atribute">
                                        <option value="Code">Code</option>
                                        <option value="Identification">Identification</option>
                                        <option value="Name">Name</option>
                                    </select>
                                    )
                                }
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
                                        <tr key={order._id}>
                                            <td>{order.code}</td>
                                            <td>{order.total}</td>
                                            <td>{order.registerdate}</td>
                                            <td>{order.identification}</td>
                                            <td>{order.name}</td>
                                            <td><button className="fas fa-eye" onClick={() => this.detailOrder(order)}></button></td>
                                            <td>{order.salesman}</td>
                                            <td><button className="fas fa-edit" onClick={() => this.updateOrder(order)}></button></td>
                                            <td><button className="fas fa-trash-alt" onClick={() => this.removeOrder(order)}></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div> 
        }
        else if(this.state.selectedComponent === 2){
            component = <OrderForm modeForm={this.state.modeForm} _id={this.state._id} order={this.state.selectedOrder}/>;   
        }
        else if(this.state.selectedComponent === 3){
            component =  <OrderDetail order={this.state.selectedOrder} modeForm={3}/>;
        }

        return(
            component   
        );
    }

    // CRUD
    // Call API service (Method GET)
    getOrders() {
        fetch(`${BASE_URL}${PATH_ORDERS}`)
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
    deleteOrder(id) {
        const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        };
        fetch(`${BASE_URL}${PATH_ORDERS}/${id}`, requestOptions)
          .then(result => result.json())
          .then(
            (result) => {
              this.getOrders();
            },
            (error) => {
              console.log(error);
            }
        );
    }
}
  
export default OrdersList;