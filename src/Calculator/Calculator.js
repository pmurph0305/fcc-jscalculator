import React from 'react'

import CalcButton from '../CalcButton/CalcButton';

import './Calculator.css';

const keys = [ 
  {id:'clear', value:'AC'},
  {id:'zero', value:'0'},
  {id:'one', value:'1'},
  {id:'two', value:'2'},
  {id:'three', value:'3'},
  {id:'four', value:'4'},
  {id:'five', value:'5'},
  {id:'six', value:'6'},
  {id:'seven', value:'7'},
  {id:'eight', value:'8'},
  {id:'nine', value:'9'},
  {id:'equals', value:'='},
  {id:'decimal', value:'.'}
]

const operators = [
  {id:'add', value:'+'},
  {id:'subtract', value:'-'},
  {id:'multiply', value:'*'},
  {id:'divide', value:'/'},
]

class Calculator extends React.Component {

  render() {
    return(
      <div>
        <div id="display"></div>
        {keys.map(item => <CalcButton key={item.id} keyId={item.id} displayed={item.value}/>)

        }
        {operators.map(item => <CalcButton key={item.id} keyId={item.id} displayed={item.value}/>)

        }
      </div>
    );
  }
}

export default Calculator;