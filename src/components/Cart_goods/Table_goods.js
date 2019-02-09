import React, { Component } from 'react';
import "./Cart_goods.css"
import CheckBox from "../../module/CheckBox"


class Table_goods extends Component {

  state = {
    quantity: 1,
    goodsCost: Math.floor(this.props.goods.goodsUnitPrice1 / 10) * 10
  }

  componentDidMount(){
    this.props.priceCalc(this.props.goods.goodsNo, this.state.goodsCost)
    this.props.priceCalcDc(this.props.goods.goodsNo, this.state.goodsCost)
  }

  addComma = (n) => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return n.toString().replace(regexp, ',');
  }

  quantityPlus = () => {
    this.setState({ quantity: this.state.quantity + 1 })
    // console.log("this.state.quantity + 1", this.state.quantity + 1)
    this.costCalcBeforeDc(this.state.quantity + 1)
    this.costCalcAfterDc(this.state.quantity + 1)
  }

  quantityMinus = () => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 })
      this.costCalcBeforeDc(this.state.quantity - 1)
      this.costCalcAfterDc(this.state.quantity - 1)
    }
    // console.log("this.state.quantity - 1", this.state.quantity - 1)
  }

  costCalcBeforeDc = (n) => {
    const currCost = Math.floor(this.props.goods.goodsUnitPrice1 * n / 10) * 10
    const goodsNo = this.props.goods.goodsNo
    this.props.priceCalc(goodsNo, currCost)
  }

  costCalcAfterDc = (n) => {
    const currCost = Math.floor(this.props.goods[`goodsUnitPrice${n}`] * n / 10) * 10
    const goodsNo = this.props.goods.goodsNo
    this.props.priceCalcDc(goodsNo, currCost)
  }

  render() {
    // console.log(this.props.goods)
    const { goods } = this.props
    const { quantity } = this.state
    const imgPath = this.props.goods.goodsImage
    const minus = "https://res.kurly.com/pc/ico/1801/ico_minus_24x4_777.png"
    const plus = "https://res.kurly.com/pc/ico/1801/ico_plus_24x24_777.png"

    return (
      <div className="view_goods">
        <table className="tableGoods">
          <colgroup>
            <col width="86px" />
            <col width="120px" />
            <col width="558px" />
            <col width="82px" />
            <col width="160px" />
            <col width="100px" />
            <col width="auto" />
          </colgroup>
          <tbody>
            <tr>
              <td className="goodsCheck">
                <CheckBox />
              </td>
              <td className="goods_thumb">
                <a className="thumb"><img src={imgPath} alt="상품이미지" /></a>
              </td>
              <td className="goods_info">
                {goods.goodsNm}
              </td>
              <td className="goods_condition">
                {goods.goodsCnt === 0 && "품절"}
              </td>
              <td className="goods_count">
                <div className="quantity">
                  <button type="button" onClick={(e) => this.quantityMinus(e)} className="cntBtn_minus"><img src={minus} style={{ width: "12px" }} alt="감소" /></button>
                  <input type="text" readOnly className="quantityNm" value={quantity} />
                  <button type="button" onClick={(e) => this.quantityPlus(e)} className="cntBtn_plus"><img src={plus} style={{ width: "12px" }} alt="추가" /></button>
                </div>
              </td>
              <td className="goods_cost" ref={this.priceRef}>
                {
                  quantity === 0 ?
                    0
                    :
                    this.addComma(Math.floor(goods.goodsUnitPrice1 * quantity / 10) * 10)
                } 원
                {/* {
                  quantity === 0 ?
                    0
                    :
                    quantity < 10 ?
                      this.addComma(Math.floor(goods[`goodsUnitPrice${quantity}`] * quantity / 10) * 10)
                      :
                      this.addComma(Math.floor(goods.goodsUnitPrice10 * quantity / 10) * 10)
                } 원 */}
              </td>
              <td className="goods_delete">
                <button type="button" className="deleteBtn"><img src="https://res.kurly.com/pc/ico/1801/btn_close_24x24_514859.png" alt="삭제" /></button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="cart_result">
        </div>
      </div>
    );
  }
}

export default Table_goods;