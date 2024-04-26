// // src/App.js
// import { h, render } from "preact";
// import First from "./components/first";

// const App = () => {
//   return (
//     <>
//       <body>
//         <First />
//       </body>
//     </>
//   );
// };

// export default App;


import { h, Component } from 'preact';
import authService from './auth.service';

export default class App extends Component {
  state = {
    isAuthenticated: false,
    user: null,
  };

  componentDidMount() {
    this.initAuth();
  }

  initAuth = async () => {
    const isAuthenticated = await authService.isAuthenticated();
    const user = isAuthenticated ? await authService.getUser() : null;
    this.setState({ isAuthenticated, user });
  };

  login = async () => {
    await authService.login();
    this.initAuth();
  };

  logout = async () => {
    await authService.logout();
    this.setState({ isAuthenticated: false, user: null });
  };

  render() {
    const { isAuthenticated, user } = this.state;

    return (
      <div>
        <nav>
          {isAuthenticated ? (
            <div>
              <span>Hello, {user.name}</span>
              <button onClick={this.logout}>Logout</button>
            </div>
          ) : (
            <button onClick={this.login}>Login</button>
          )}
        </nav>
        <main>
          {/* Your app content goes here */}
        </main>
      </div>
    );
  }
}