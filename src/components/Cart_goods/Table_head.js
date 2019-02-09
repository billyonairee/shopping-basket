import React, { Component } from 'react';
import "./Cart_goods.css"
import CheckBox from "../../module/CheckBox"

class Table_head extends Component {
  render() {
    return (
      <div>
        <table className="tableHead">
          <colgroup>
            <col width="395px" />
            <col width="482px" />
            <col width="155px" />
            <col width="160px" />
            <col width="auto" />
          </colgroup>
          <thead>
            <tr>
              <th>
                <div className="allCheck">
                  <CheckBox />
                  <span style={{marginLeft:"33px"}}>전체선택 (</span>
                  <span>0</span>/
                  <span>3)</span>
                </div>
              </th>
              <th className="thInfo">
                상품 정보
              </th>
              <th className="thCount">
                수량
              </th>
              <th className="thCost">
                상품금액
              </th>
              <th className="thDelete"></th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Table_head;