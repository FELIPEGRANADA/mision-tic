import React from 'react';
import '../styles/ProductForm.css';
import ProductsList from './ProductsList';

// Class ProductForm Component 
class ProductForm extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listProducts = this.listProducts.bind(this);
        this.state={selectedComponent: <FormComponent onClickRegister={this.listProducts} />};
    }

    // Show list products
    listProducts(){
        this.setState({selectedComponent: <ProductsList/>})
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
        <div className="productForm-box">
            <h1>Register Product</h1>
            <form>
                <label><b>Code</b></label>  
                <input className="productForm-input" type="text" placeholder="Enter Code" />
                <label><b>Description</b></label> 
                <input className="productForm-input" type = "text" placeholder="Enter Description" />
                <label><b>Unit Value</b></label> 
                <input className="productForm-input" type = "text" placeholder="Enter Unit Value" />
                <label><b>State</b></label> 
                <select className="productForm-input" name="State">
                </select>
                <div className="button-box">
                    <button className="productForm-button" onClick={props.onClickRegister}>Register</button>
                    <button className="productForm-button" onClick={props.onClickRegister}>Cancel</button>
                </div>
            </form>
        </div>
    );    
}

export default ProductForm;