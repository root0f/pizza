import React from "react";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";


function App() {

  return (
      <div className="wrapper">
         <Header />
          <div className="content">
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
          </div>
      </div>
  );
}

export default App;

//Классновый компонент

// class App extends React.Component {
//     componentDidMount() {
//      return (
//
//              axios.get('http://localhost:3001/db.json').then(({ data }) => {
//                    this.props.setPizzas(data.pizzas)
//                  })
//
//      )
//     }
//
//     render() {
//
//         return (
//             <div className="wrapper">
//                 <Header/>
//                 <div className="content">
//                     <Route exact path='/' render={() => <Home items={this.props.items}/>}/>
//                     <Route exact path='/cart' component={Cart}/>
//                 </div>
//             </div>
//         )
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         items: state.pizzas.items,
//         filters: state.filters,
//     }
// }
//
// const mapDispatchToProps = {
//     setPizzas,
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
