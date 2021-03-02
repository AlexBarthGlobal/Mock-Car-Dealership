import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store'

/**
 * COMPONENT
 */

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <React.Fragment>
        <h2>All Products</h2>
        <div id="all-product-list">
          {this.props.allProducts.map(product => {
            return (
              <div className="product-preview" key={product.id}>
                <img src={product.picture} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log(state)
  return {
    allProducts: state.product.allProducts
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
