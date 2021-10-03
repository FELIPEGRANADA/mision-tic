import React from 'react';
import '../styles/ProductsList.css';
import ProductForm from './ProductForm';

const dataLoad = [
    { code: 1, description: "Vino", unitValue: 95000, state: "Disponible"},
    { code: 2, description: "Champagne", unitValue: 254000, state: "No disponible"},
    { code: 3, description: "Vodka", unitValue: 80000, state: "Disponible"},
    { code: 4, description: "Tequila", unitValue: 120000, state: "Disponible"}
  ];

// Class ProductsList Component
class ProductsList extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.registerProduct = this.registerProduct.bind(this);
        this.state = {selectedComponent: 1,
                      data: dataLoad
                     };
    }

    // Show Product Register Form
    registerProduct(){
        this.setState({selectedComponent: 2});
    }

    // Method Render the component
    render() {
        let component;
        if(this.state.selectedComponent === 1){
            component = <TableProducts onClickNew={this.registerProduct} dataTable={this.state.data}/>; 
        }
        else if(this.state.selectedComponent === 2){
            component = <ProductForm />;   
        }

        return(
            component
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
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {props.dataTable.map((product) => (
                        <tr key={product.code}>
                            <td>{product.code}</td>
                            <td>{product.description}</td>
                            <td>{product.unitValue}</td>
                            <td>{product.state}</td>
                            <td><button className="fas fa-edit" onClick={props.onClickNew}></button></td>
                            <td><button className="fas fa-trash-alt"></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
  
export default ProductsList;