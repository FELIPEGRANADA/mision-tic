import React from 'react';
import './ProductsList.css';
import ProductForm from './ProductForm';

// Class Component ProductsList
class ProductsList extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.registerProduct = this.registerProduct.bind(this);
        this.state = {isRegisterProduct: false};
    }

    registerProduct(){
        this.setState({isRegisterProduct: true});
    }

    render() {
        if(this.state.isRegisterProduct === false)
        {
            return(
                <TableProducts onClickNew={this.registerProduct}/>
            );
        }
        else{
            return(
              <ProductForm />  
            );
        }
    }
}

function TableProducts(props){
    return(
        <div className="productsList-box">
            <div>
                <h1>Products</h1>
                <button className="new-product" onClick={props.onClickNew}>New +</button>
            </div>
            <table className="table-bordered">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Unit Value</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Vino</td>
                        <td>95000</td>
                        <td>Disponible</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Champagne</td>
                        <td>254000</td>
                        <td>No disponible</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
  
export default ProductsList;