import React from "react";
import View from "./components/View";
import datos from "./components/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userHistory: [],
      currentOption: null,
      loading: true,
    };

    console.log("constructor");
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ userHistory: datos, loading: false });
    }, 1000);
  }
 testFunction(option,id){
  const idNew = this.props.idDatos 
   if ( idNew === id) {
    return option && id + 1 +`{this.props.nameDatos}`
  }
  const currentOption = this.state.userHistory.filter(item=>item.id === idNew)
  this.setState({ currentOption: currentOption });
 }

  render() {
    console.log("currentOption", this.state.currentOption);
    return (
      <div className="App">
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {this.state.currentOption && (
              <View vista={this.state.currentOption} />
              
            )}
          </>
        )}
      </div>
    );
  }
 
}
    
  

export default App;
