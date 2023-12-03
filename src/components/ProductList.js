import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    let { productsData, setStateModal } = this.props;
    return (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {productsData.map((product, index) => {
            return (
              <div
                key={index}
                className=""
              >
                <ProductItem item={product} setStateModal={setStateModal} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
