import React from 'react';
import '../styles/ProductsList.css';
import ProductForm from './ProductForm';

// Class ProductsList Component
class ProductsList extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.registerProduct = this.registerProduct.bind(this);
        this.state = {selectedComponent: <TableProducts onClickNew={this.registerProduct}/>};
    }

    // Show Product Register Form
    registerProduct(){
        this.setState({selectedComponent: <ProductForm />});
    }

    // Method Render the component
    render() {
        return(
            this.state.selectedComponent
        );
    }   
}

// TableProducts Component
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