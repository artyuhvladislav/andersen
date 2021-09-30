import React from 'react';
import './App.css';
import Input from './components/Iinput';

class App extends React.Component {
  
  state = {
    isDisabled: false
  }



  inputHandler = (value) => {
    if(value === 'реакт') {
      this.setState((state) => ({isDisabled: !state.isDisabled}));
    } else {
      this.setState({isDisabled: false});
    }    
  }
  
  render() {
    return (
      <div className="App">
         <Input inputHandler={this.inputHandler} isDisabled={this.state.isDisabled} />
       
      </div>
    );
  }
}

export default App;
