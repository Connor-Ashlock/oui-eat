import React from 'react';
import Header from './header';
import RestaurantList from './restaurant-list';
import Categories from './categories';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.state = {
      view: { name: 'home', params: {}, currentCategory: null },
      cart: [],
      categories: []
    };

    this.getAllCategories = this.getAllCategories.bind(this);
  }

  getAllCategories() {
    fetch('/api/category')
      .then(res => res.json())
      .then(data => {
        this.setState({ categories: data });
      });
  }

  componentDidMount() {
    this.getAllCategories();
  }

  setView(name, params) {
    this.setState({ view: { name: name, params: params } });
  }

  render() {
    let viewing = null;
    if (this.state.view.name === 'restaurants') {
      viewing = <RestaurantList setView={this.setView} category={this.state.view.params} />;
    } else if (this.state.view.name === 'categories') {
      viewing = <Categories allCategories={this.state.categories} />;
    }
    return (
      <>
        <Header cart={this.state.cart} view={this.state.view} />
        { viewing }
      </>
    );
  }
}
