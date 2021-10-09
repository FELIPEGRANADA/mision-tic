import React from 'react';
import '../styles/ProductForm.css';
import ProductsList from './ProductsList';

// Constants to connect to database
const BASE_URL = process.env.REACT_APP_API_URL;
const PATH_PRODUCTS = 'products';

// Class ProductForm Component 
class ProductForm extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listProducts = this.listProducts.bind(this);
        this.state={selectedComponent: 1,
                    modeForm: this.props.modeForm,
                    _id: this.props._id,
                    form: {
                        code : "",
                        description : "",
                        unitValue : "",
                        state : "disponible"
                    }
        };
    }

    // Before show the component
    componentDidMount() {
        // Mode Update Product
        if(this.state.modeForm === 2){
            this.getProductById(this.state._id);
        }
    }

     // Show list products
    listProducts(){
        this.setState({selectedComponent: 2});
    }

    // Cancel Action Form
    cancelForm = (e) => {
        e.preventDefault();
        this.listProducts();
    }

    // Add a product 
    addProduct = (e) => {
        e.preventDefault();
        // New product from Form
        let product = {...this.state.form};
        console.log(product);
        this.createProduct(product);        
    }

    // Modify a product 
    modifyProduct = (e) => {
        e.preventDefault();
        // Updated information product from Form
        let product = {...this.state.form};
        console.log(product);
        this.updateProduct(product);
        
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
        // Mode register product
        if(this.state.modeForm === 1){
            formTitle = <h1>Register Product</h1>;
            formEvent = this.addProduct;
            submitButton = <button className="productForm-button" type="submit">Register</button>; 
            codeInput = <input className="productForm-input"
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
            formTitle = <h1>Update Product</h1>;
            formEvent = this.modifyProduct;
            submitButton = <button className="productForm-button" type="submit">Update</button>; 
            codeInput = <input className="productForm-input read-only-input"
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
            component = <div className="productForm-box">
                            {formTitle}
                            <label><b>Code</b></label> 
                            <form onSubmit={formEvent}> 
                                {codeInput}
                                <label><b>Description</b></label> 
                                <input className="productForm-input" 
                                        name = "description"
                                        type = "text" 
                                        placeholder="Enter Description"
                                        onChange={this.handleChange}
                                        value={this.state.form.description}
                                        required 
                                />
                                <label><b>Unit Value</b></label> 
                                <input className="productForm-input"
                                        name = "unitValue" 
                                        type = "text" 
                                        placeholder="Enter Unit Value"
                                        onChange={this.handleChange}
                                        value={this.state.form.unitValue}
                                        required 
                                />
                                <label><b>State</b></label> 
                                <select className="productForm-input" 
                                        name = "state"
                                        onChange={this.handleChange}
                                        value={this.state.form.state}
                                >
                                    <option value="disponible">Disponible</option>
                                    <option value="no disponible">No disponible</option>
                                </select>
                                <div className="button-box">
                                    {submitButton}
                                    <button className="productForm-button" onClick={this.cancelForm}>Cancel</button>
                                </div>
                            </form>
                        </div>; 
        }
        else if(this.state.selectedComponent === 2){
            component = <ProductsList/>;   
        }
        
        return(
            component
        );     
    }

    // CRUD
    // Call API service (Method POST)
    createProduct(product) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product)
        };
        fetch(`${BASE_URL}${PATH_PRODUCTS}`, requestOptions)
          .then(result => result.json())
          .then(
            (result) => {
              // List products  
              this.listProducts();
            },
            (error) => {
              console.log(error);
            }
          );
      }

      // Call API service (Method GET by Id)
      getProductById(id) {
        fetch(`${BASE_URL}${PATH_PRODUCTS}/${id}`)
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
      updateProduct(product) {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product)
        };
        fetch(`${BASE_URL}${PATH_PRODUCTS}/${product._id}`, requestOptions)
          .then(result => result.json())
          .then(
            (result) => {
              this.listProducts();
            },
            (error) => {
              console.log(error);
            }
          );
      }
}

export default ProductForm;