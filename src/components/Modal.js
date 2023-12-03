import React, { Component } from "react";
import "./Modal.css";
export default class Modal extends Component {
  render() {
    let { content, isOpen, onClose } = this.props;
    console.log(content);
    if (!isOpen) {
      return null;
    }
    return (
      <div className="modal-overlay " onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <div className=" py-10 modal-content grid grid-cols-2 rounded-lg ">
            <div className="left-content ">
              <img
                className="hover:scale-110 duration-200 ml-20"
                src={content.image}
                alt={content.name}
              />
            </div>
            <div className="right-content text-xl space-y-5">
              <h2 className="text-4xl mb-3 font-bold">{content.name}</h2>
              <p>
                <strong>Price:</strong> ${content.price}
              </p>
              <p>
                {" "}
                <strong>Description:</strong> {content.description}
              </p>
              <p>
                <strong>Quantity: </strong>
                {content.quantity}
              </p>
              <p className="opacity-80">
                <strong>Alias:</strong> #{content.alias}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
