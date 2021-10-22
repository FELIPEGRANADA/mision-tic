import React from 'react';
import '../styles/OrderDetail.css';
import OrderForm from './OrderForm';
import OrdersList from './OrdersList';

// Constants to connect to database
const BASE_URL = process.env.REACT_APP_API_URL;
const PATH_PRODUCTS = 'products';

// Class OrderDetail Component 
class OrderDetail extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listOrders = this.listOrders.bind(this);
        this.backToForm = this.backToForm.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.state={selectedComponent: 1,
                    _id: this.props._id,
                    order: {...props.order },
                    modeForm: this.props.modeForm,
                    data: [],
                    product:{
                        code: "",
                        amount: ""
                    }
                   };
    }       

    // Before show the component
    componentDidMount() {
        if(this.state.modeForm === 1 || this.state.modeForm === 2){
            this.getProducts();
        }
        
    }

    // Show list orders
    listOrders(){
        this.setState({selectedComponent: 2})
    }

    // Show register form
    backToForm(){
        this.setState({selectedComponent: 3})
    }

    // Add a product in the list
    addProduct(){
        let product, products;
        products = this.state.order.products;
        // Find the selected product 
        this.state.data.forEach(element => {  
            if(String(element.code) === this.state.product.code){
                product = {
                    code : this.state.product.code,
                    description : element.description,
                    amount : this.state.product.amount,
                    unitValue : element.unitValue
                }
                products.push(product);
                this.setState({
                    order: {
                        ...this.state.order,
                        products: products
                    }
                })
            }
        })
    }

    // Get changes over the form's fields
    handleChange = (e) => {
        this.setState({
            product: {
            ...this.state.product,
            [e.target.name]: e.target.value,
            },
        });
    };

    // Method Render the component
    render() {
        let backButton, addProductSection;
        // Mode register detail product
        if(this.state.modeForm === 1 || this.state.modeForm === 2){
            backButton = <button className="orderDetail-button" onClick={this.backToForm}>Accept</button>;
            addProductSection = <div>
                                    <select className="orderDetail-input" 
                                            name="code"
                                            onChange={this.handleChange}
                                    >
                                        {this.state.data.map((product) => (
                                            <option key={product._id} value={product.code}>
                                                {product.description}
                                            </option>
                                        ))}                                        
                                    </select>
                                    <input className="orderDetail-input"
                                       name="amount" 
                                       type = "text" 
                                       placeholder="Enter Amount"
                                       onChange={this.handleChange}
                                       required 
                                    />
                                    <button className="orderDetail-button" onClick={this.addProduct}>Add +</button>
                                </div>
                                
        }
        else if(this.state.modeForm === 3){
            backButton = <button className="orderDetail-button" onClick={this.listOrders}>Back</button>;    
        }

        let component;
        if(this.state.selectedComponent === 1){
            component = <div className="orderDetail-box">
                            <div>
                                <h1>Order Detail # {this.state.order.code}</h1>
                                <h4>Total {this.state.order.total}</h4>
                                <h4>Register Date {this.state.order.registerdate}</h4>
                                <h2>Productos vendidos</h2>
                                {addProductSection}
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
                                    {this.state.order.products.map((product) => (
                                        <tr key={product.code}>
                                            <td>{product.code}</td>
                                            <td>{product.description}</td>
                                            <td>{product.amount}</td>
                                            <td>{product.unitValue}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {backButton}
                        </div>
        }
        else if (this.state.selectedComponent === 2){
            component = <OrdersList />
        }
        else if (this.state.selectedComponent === 3){
            component = <OrderForm modeForm={this.state.modeForm} order={this.state.order} _id={this.state._id}/>
        }
            return(
                component
            );      
    }

    // CRUD
    // Call API service (Method GET)
    getProducts() {
        fetch(`${BASE_URL}${PATH_PRODUCTS}`)
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
}
  
export default OrderDetail;