import React, { Component } from "react";
import Header from "./Header";
import data from "./../Data/data.json";
import ProductList from "./ProductList";
import ProductItem from "./ProductItem";
import Modal from "./Modal";

export default class ShoesStore extends Component {
  state = {
    productDetail: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    isModalOpen: false,
  };
  setStateModal = (detail) => {
    console.log(detail);
    this.setState({ productDetail: data[detail - 1], isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <div className="bg-white border-gray-200 dark:bg-gray-900 ">
          <Header />
          <Modal
            content={this.state.productDetail}
            isOpen={this.state.isModalOpen}
            onClose={this.closeModal}
          />
          <div className="container mx-auto">
            <h1 className="text-white font-bold text-3xl mb-5 text-center hover:text-orange-300 duration-300">
              Shoes Shop
            </h1>
            <ProductList
              productsData={data}
              setStateModal={this.setStateModal}
            />
          </div>
        </div>
      </>
    );
  }
}
