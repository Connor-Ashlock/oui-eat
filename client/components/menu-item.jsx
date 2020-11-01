import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(event) {
    this.props.addToCart(this.props.menuItem);
    this.props.openModal();
  }

  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="card-text d-flex justify-content-between align-items-center">
            <div className="font-weight-bold" style={{ flexBasis: '50%' }}>
              {this.props.menuItem.name}
            </div>
            <div>
              <button
                type="button"
                className="btn btn-secondary mt-1"
                onClick={this.handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div>${Number(this.props.menuItem.price).toFixed(2)}</div>
          <div className="font-weight-light">
            {this.props.menuItem.description}
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
