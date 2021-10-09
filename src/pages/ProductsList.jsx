import React from 'react';
import '../styles/ProductsList.css';
import ProductForm from './ProductForm';

// Constants to connect to database
const BASE_URL = process.env.REACT_APP_API_URL;
const PATH_PRODUCTS = 'products';

// Class ProductsList Component
class ProductsList extends React.Component{

    // Constructor of the class
    constructor(props) {
        super(props);
        this.registerProduct = this.registerProduct.bind(this);
        this.state = {selectedComponent: 1,
                      data: [],
                      modeForm: 0,
                      _id: ""
                     };
    }

    // Before show the component
    componentDidMount() {
        this.getProducts();
    }

    // Show Product Register Form in Register Mode
    registerProduct(){
        this.setState({selectedComponent: 2, modeForm: 1});
    }

    // Show Product Register Form in Update Mode
    updateProduct = (product) => {
        this.setState({selectedComponent: 2, modeForm: 2, _id: product._id});
    }

    // Delete a product
    removeProduct = (product) => {
        let opcion = window.confirm("Are you sure you want to remove the product " + product.code + "?");
        if (opcion) {
          this.deleteProduct(product._id)
        }    
    };

    // Method Render the component
    render() {
        let component;
        if(this.state.selectedComponent === 1){
            component = <div className="productsList-box">
                            <div>
                                <h1>Products</h1>
                                <button className="new-product" onClick={this.registerProduct}>New +</button>
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
                                    {this.state.data.map((product) => (
                                        <tr key={product._id}>
                                            <td>{product.code}</td>
                                            <td>{product.description}</td>
                                            <td>{product.unitValue}</td>
                                            <td>{product.state}</td>
                                            <td><button className="fas fa-edit" onClick={() => this.updateProduct(product)}></button></td>
                                            <td><button className="fas fa-trash-alt" onClick={() => this.removeProduct(product)}></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>; 
        }
        else if(this.state.selectedComponent === 2){
            component = <ProductForm modeForm={this.state.modeForm} _id={this.state._id}/>;   
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

    // Call API service (Method DELETE)
    deleteProduct(id) {
        const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        };
        fetch(`${BASE_URL}${PATH_PRODUCTS}/${id}`, requestOptions)
          .then(result => result.json())
          .then(
            (result) => {
              this.getProducts();
            },
            (error) => {
              console.log(error);
            }
        );
    }
    
}
  
export default ProductsList;