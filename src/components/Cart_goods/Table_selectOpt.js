import React, { Component } from 'react';
import CheckBox from "../../module/CheckBox"

class Table_selectOpt extends Component {
  render() {
    return (
      <div className="selectOpt">
        <div className="checkBoxLine">
        <CheckBox />
        </div>
        <span className="all_check">전체선택 (
          <span>0</span>/
          <span>3)</span>
        </span>
        <button type="button" className="btn_delete">선택 삭제</button>
        <button type="button" className="btn_delete">품절 상품 삭제</button>
      </div>
    );
  }
}

export default Table_selectOpt;