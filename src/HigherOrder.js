import React, { Component } from "react";

function Hoc(HocComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          Sample HOC
          <HocComponent />
        </div>
      );
    }
  };
}

function App() {
  return (
    <div>
      <h2>HOC Example</h2>
    </div>
  );
}

const App1 = Hoc(App);
export default App1;




// const App = () => {
//     return (
//         <Switch>
//           <PrivateRoute exact path='/' component={Home} />
//           <Route exact path='/about' component={About} />
//           <Route exact path='/login' component={Login} />
//           <Route exact path='/register' component={Register} />
//         </Switch>
//     );
//   }
  
//   export default App;



// import React, { useContext , useEffect} from 'react';
// import { Route, Redirect } from 'react-router-dom'
// import AuthContext from '../../context/auth/authContext'

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const authContext = useContext(AuthContext)
//   const { loadUser, isAuthenticated } = authContext
//   useEffect(() => {
//     loadUser()
//     // eslint-disable-next-line
//   }, [])
//   if(isAuthenticated === null){
//     return <></>
//   }
//   return (
//     <Route {...rest} render={props =>
//       !isAuthenticated ? (
//         <Redirect to='/login'/>
//       ) : (
//         <Component {...props} />
//       )
//     }
//     />
//   );
// };
// export default PrivateRoute;