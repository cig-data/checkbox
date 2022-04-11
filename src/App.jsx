import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import checkboxImg from './img/checked.png';
import uncheckboxImg from './img/unchecked.png';
const COLORMAP = [
  '#F87357',
  '#FF9502',
  '#04C060',
  '#385ABD'
]
const options = [
  {
    value: 1,
    label: 'checkbox1'
  },
  {
    value: 2,
    label: 'checkbox2'
  },
  {
    value: 3,
    label: 'checkbox3'
  }
]
export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: [1]
        }
    }
    handleChange(v) {
      let newValue = this.state.value;
      if(newValue.includes(v)){
        if(newValue.length === 1) return;
        newValue = newValue.filter( o=> o!==v);
      }else{
        newValue.push(v);
      }
      this.setState({
        value: newValue
      })
    }
    render() {
        const { value } = this.state;
        return (
            <div className={"anCheckbox"}>
                {
                  options.length ? options.map(v => {
                    return (
                      <div key={v.value} className={'anCheckboxLi'} onClick={this.handleChange.bind(this, v.value)}>
                        <img src={value.includes(v.value)?checkboxImg:uncheckboxImg} alt='' />
                        <span className={value.includes(v.value) ? 'anCheckboxSelected' : ''} style={{color: COLORMAP[v.value] ? COLORMAP[v.value] : '#64708F'}}>{v.label}</span>
                      </div>
                    )
                  }) : null
                }
            </div>
        );
    }
}
