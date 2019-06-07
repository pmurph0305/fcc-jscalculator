import React from 'react'

import CalcButton from '../CalcButton/CalcButton';

import './Calculator.css';

const keys = [ 
  {id:'clear', value:'AC'},
  {id:'decimal', value:'.'},
  {id:'zero', value:'0'},
  {id:'seven', value:'7'},
  {id:'eight', value:'8'},
  {id:'nine', value:'9'},
  {id:'four', value:'4'},
  {id:'five', value:'5'},
  {id:'six', value:'6'},
  {id:'one', value:'1'},
  {id:'two', value:'2'},
  {id:'three', value:'3'},
  
  
]

const operators = [
  {id:'add', value:'+'},
  {id:'subtract', value:'-'},
  {id:'multiply', value:'*'},
  {id:'divide', value:'/'},
  {id:'equals', value:'='},
]

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0
    }
  }


  render() {
    return(
      <div className='calculator'>
        <div className="display" id="display">{this.state.currentValue}</div>
        <div className="keys-container">
          {keys.map(item => 
            <CalcButton 
              key={item.id} 
              keyId={item.id} 
              displayed={item.value}
            />
          )}
        </div>
        <div className='operator-container'>
          {operators.map(item => 
            <CalcButton 
              key={item.id} 
              keyId={item.id} 
              displayed={item.value}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Calculator;