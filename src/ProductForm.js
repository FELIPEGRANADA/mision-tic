import React from 'react';
import './ProductForm.css';
import ProductsList from './ProductsList';

class ProductForm extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.listProducts = this.listProducts.bind(this);
        this.state={isListProducts:false};
    }

    listProducts(){
        this.setState({isListProducts:true})
    }

    render(){
        if(this.state.isListProducts === false)
        {
            return(
                <ComponentForm onClickRegister={this.listProducts}/>
            );
        }
        else{
            return(
                <ProductsList/>
            );
        }
    }
}

function ComponentForm(props){
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