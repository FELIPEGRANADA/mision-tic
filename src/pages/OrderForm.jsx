import React from 'react';
import '../styles/OrderForm.css';
import OrdersList from './OrdersList';
import OrderDetail from './OrderDetail';

// Constants to connect to database
const BASE_URL = process.env.REACT_APP_API_URL;
const PATH_ORDERS = 'orders';

// Class OrderForm Component 
class OrderForm extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listOrders = this.listOrders.bind(this);
        this.state={selectedComponent: 1,
                    modeForm: this.props.modeForm,
                    _id: this.props._id,
                    form: {
                        code : this.props.order.code,
                        total : this.props.order.total,
                        registerdate : this.props.order.registerdate,
                        identification : this.props.order.identification,
                        name : this.props.order.name,
                        salesman: "Michelle",//this.props.order.salesman,
                        products: this.props.order.products
                    }
        };
    }

    // Show list orders
    listOrders(){
        this.setState({selectedComponent: 2});
    }

    // Show Order Detail
    detailOrder = (e) => {
      e.preventDefault();
      this.setState({selectedComponent: 3});
    }

    // Cancel Action Form
    cancelForm = (e) => {
        e.preventDefault();
        this.listOrders();
    }

    // Add a order 
    addOrder = (e) => {
        e.preventDefault();
        // New order from Form
        let order = {...this.state.form};
        console.log(order);
        this.createOrder(order);        
    }

    // Modify a order 
    modifyOrder = (e) => {
        e.preventDefault();
        // Updated information order from Form
        let order = {...this.state.form};
        console.log(order);
        this.updateOrder(order);        
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
        let formTitle, submitButton, formEvent, codeInput;
        // Mode register order
        if(this.state.modeForm === 1){
            formTitle = <h1>Register Order</h1>;
            formEvent = this.addOrder;
            submitButton = <button className="orderForm-button" type="submit">Register</button>; 
            codeInput = <input className="orderForm-input"
                                name="code" 
                                type="text" 
                                placeholder="Enter Code" 
                                onChange={this.handleChange}
                                value={this.state.form.code}
                                required
                        />;
        }
        // Mode update product
        else if(this.state.modeForm === 2){
            formTitle = <h1>Update Order</h1>;
            formEvent = this.modifyOrder;
            submitButton = <button className="orderForm-button" type="submit">Update</button>; 
            codeInput = <input className="orderForm-input read-only-input"
                                name="code" 
                                type="text" 
                                placeholder="Enter Code" 
                                onChange={this.handleChange}
                                value={this.state.form.code}
                                required
                                readOnly
                        />; 
                        
        }

        let component;
        if(this.state.selectedComponent === 1){
            component = <div className="orderForm-box">
                            {formTitle}
                            <form onSubmit={formEvent}>
                                <label><b>Code</b></label>  
                                {codeInput}
                                <label><b>Total</b></label> 
                                <input className="orderForm-input"
                                       name="total" 
                                       type = "text" 
                                       placeholder="Enter Total"
                                       onChange={this.handleChange}
                                       value={this.state.form.total}
                                       required 
                                />
                                <label><b>Register Date</b></label> 
                                <input className="orderForm-input"
                                       name="registerdate" 
                                       type = "date"
                                       onChange={this.handleChange}
                                       value={this.state.form.registerdate}
                                       required
                                />
                                <label><b>Customer</b></label> 
                                <input className="orderForm-input"
                                       name="identification" 
                                       type = "text" 
                                       placeholder="Enter Identification"
                                       onChange={this.handleChange}
                                       value={this.state.form.identification}
                                       required 
                                />
                                <input className="orderForm-input"
                                       name="name" 
                                       type = "text" 
                                       placeholder="Enter Name"
                                       onChange={this.handleChange}
                                       value={this.state.form.name}
                                       required 
                                />
                                <label><b>Products {this.state.form.products.length}</b></label>
                                <button className="orderForm-button button-addProduct" onClick={this.detailOrder}> Add Product +</button>
                                <label><b>Salesman</b></label> 
                                <select className="orderForm-input" 
                                        name="salesman"
                                        onChange={this.handleChange}
                                        value={this.state.form.salesman}
                                >
                                  <option value="disponible">Michelle</option>
                                </select>
                                <div className="button-box">
                                    {submitButton}
                                    <button className="orderForm-button" onClick={this.cancelForm}>Cancel</button>
                                </div>
                            </form>
                        </div>
        }
        else if(this.state.selectedComponent === 2){
            component = <OrdersList/>;   
        }
        else if(this.state.selectedComponent === 3){
          component =  <OrderDetail order={this.state.form} modeForm={this.state.modeForm} _id={this.state._id}/>;
        } 
        
        return(
            component
        );
    }

    // CRUD
    // Call API service (Method POST)
    createOrder(order) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(order)
        };
        fetch(`${BASE_URL}${PATH_ORDERS}`, requestOptions)
          .then(result => result.json())
          .then(
            (result) => {
              // List orders  
              this.listOrders();
            },
            (error) => {
              console.log(error);
            }
          );
      }

    // Call API service (Method GET by Id)
    getOrderById(id) {
        fetch(`${BASE_URL}${PATH_ORDERS}/${id}`)
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
    updateOrder(order) {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(order)
        };
        fetch(`${BASE_URL}${PATH_ORDERS}/${this.state._id}`, requestOptions)
          .then(result => result.json())
          .then(
            (result) => {
              this.listOrders();
            },
            (error) => {
              console.log(error);
            }
          );
    }


}

export default OrderForm;