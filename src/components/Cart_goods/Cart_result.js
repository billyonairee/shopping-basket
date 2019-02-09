import React, { Component } from 'react';

class Cart_result extends Component {

  addComma = (n) => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return n.toString().replace(regexp, ',');
  }

  render() {
    const { total, totalDc } = this.props

    return (
      <div>
        <dl className="list amount_total">
          <dt className="title">상품금액</dt>
          <dd className="result">
            <span className="inner_result">
              {this.addComma(total)} 원
            </span>
          </dd>
        </dl>
        <span className="symbol"> - </span>
        <dl className="list amount_dc">
          <dt className="title">상품할인금액</dt>
          <dd className="result">
            <span className="inner_result">
              {this.addComma(total - totalDc)} 원
            </span>
          </dd>
        </dl>
        <span className="symbol"> + </span>
        <dl className="list amount_delivery">
          <dt className="title">배송비</dt>
          <dd className="result">
            <span className="inner_result">
              {
                total - (total - totalDc) > 40000 ?
                  0
                  :
                  3000
              } 원
            </span>
          </dd>
        </dl>
        <span className="symbol"> = </span>
        <dl className="list amount_result">
          <dt className="title">결제예정금액</dt>
          <dd className="result">
            <span className="inner_result">
              {
                total - (total - totalDc) > 40000 ?
                  total - (total - totalDc)
                  :
                  total - (total - totalDc) - 3000
              } 원
            </span>
          </dd>
        </dl>
      </div>
    );
  }
}

export default Cart_result;