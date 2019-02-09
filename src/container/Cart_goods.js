import React, { Component } from 'react';
import "../components/Cart_goods/Cart_goods.css"
import axios from 'axios';
import Table_head from "../components/Cart_goods/Table_head"
import Table_goods from "../components/Cart_goods/Table_goods"
import Table_selectOpt from "../components/Cart_goods/Table_selectOpt"
import Cart_result from "../components/Cart_goods/Cart_result"


class Cart_goods extends Component {

  state = {
    basketGoods: [],
    goodsPrices: {},
    goodsPricesDc: {},
    total: '',
    totalDc: '',
  }

  componentDidMount() {
    axios.get('cart.json')
      .then(res => this.setState({
        basketGoods: res.data
      }))
  }

  priceCalc = (goodsNo, n) => {
    const prices = {}
    prices[goodsNo] = n
    this.setState({
      goodsPrices: Object.assign(this.state.goodsPrices, prices)
    })
    const priceArr = Object.values(this.state.goodsPrices)
    const priceSum = priceArr.reduce((prev, curr) => prev + curr);
    this.setState({ total: priceSum })
    // console.log("prices:", this.state.goodsPrices)
    // console.log("total: ", this.state.total)
  }

  priceCalcDc = (goodsNo, n) => {
    const pricesDc = {}
    pricesDc[goodsNo] = n
    this.setState({
      goodsPricesDc: Object.assign(this.state.goodsPricesDc, pricesDc)
    })
    const priceArr = Object.values(this.state.goodsPricesDc)
    const priceSum = priceArr.reduce((prev, curr) => prev + curr);
    this.setState({ totalDc: priceSum })
    // console.log("pricesDc:", this.state.goodsPricesDc)
    // console.log("totalDc: ", this.state.totalDc)
  }

  render() {
    const { basketGoods } = this.state
    // if (!basketGoods.length) {
    //   return null
    // }
    // console.log(this.state.goodsPrices)
    // console.log("this.state.total : ", this.state.total)
    return (
      <div className="cartgoods">
        <Table_head />
        {
          basketGoods.map(l =>
            <div className="viewGoods" key={l.sno}>
              <Table_goods goods={l} priceCalc={this.priceCalc} priceCalcDc={this.priceCalcDc} />
            </div>
          )
        }
        <Table_selectOpt />
        <Cart_result total={this.state.total} totalDc={this.state.totalDc}/>
      </div>
    );
  }
}

export default Cart_goods;