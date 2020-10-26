import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./static/fonts/monteserrat.css";
import "./static/fonts/poppins.css";
import "./App.css";
import { auth } from "./firebaseConfig";
import Home from "./Home";
import { StateProvider, useStateValue } from "./StateProvider";
import Navbar from "./Navbar";

function App() {
  //   const [{ user }, dispatch] = useStateValue();

  //   useEffect(() => {
  //     const unSubscribe = auth.onAuthStateChanged((authUser) => {
  //       if (authUser) {
  //         //USER LOGGED IN
  //         dispatch({
  //           type: "SET_USER",
  //           user: authUser,
  //         });
  //       } else {
  //         //USER LOGGED OUT
  //         dispatch({
  //           type: "SET_USER",
  //           user: null,
  //         });
  //       }
  //     });

  //     return () => {
  //       //CLEAN-UP PROCESS
  //       unSubscribe();
  //     };
  //   }, []);

  // const signIn = (email, password) => {
  //   auth
  //     .signInWithEmailAndPassword("amlu9421@gmail.com", "asdf1234")
  //     .then((user) => {
  //       if (user) {
  //         console.log(user);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  // const signOut = (user) => {
  //   auth.signOut();
  //   console.log(user);
  // };
  //   return (
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       <button onClick={signIn}>Login</button>
  //       <button onClick={signOut}>Logout</button>
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  //   <Home />
  // </div>
  //   );
  const initialState = {
    theme: { primary: "green" },
    user: null,
  };

  useEffect(() => {
    auth.onAuthStateChanged((loggedUser) => {
      if (loggedUser) {
        console.log("THE USER IS >>> ", loggedUser.email);
      } else {
      }
    });
  }, []);

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword("amlu9421@gmail.com", "asdf1234")
      .then((user) => {
        if (user) {
          console.log(user);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signOut = (user) => {
    auth.signOut();
    console.log(user);
  };
  const reducer = (state, action) => {
    console.log(action.newTheme);
    switch (action.type) {
      case "changeTheme":
        return {
          ...state,
          theme: action.newTheme,
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={signIn}>Login</button>
            <button onClick={signOut}>Logout</button>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Home />
      </div>
    </StateProvider>
  );
}

// const App = () => {
//   const initialState = {
//     theme: { primary: "green" },
//     user: null,
//   };

//   const [{ theme }, dispatch] = useStateValue();
//   useEffect(() => {
//     auth.onAuthStateChanged((loggedUser) => {
//       if (loggedUser) {
//         console.log("THE USER IS >>> ", loggedUser.email);
//         dispatch({
//           type: "SET_USER",
//           user: loggedUser.email,
//         });
//       } else {
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });
//   }, []);

//   const signIn = (email, password) => {
//     auth
//       .signInWithEmailAndPassword("amlu9421@gmail.com", "asdf1234")
//       .then((user) => {
//         if (user) {
//           console.log(user);
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };

//   const signOut = (user) => {
//     auth.signOut();
//     console.log(user);
//   };
//   const reducer = (state, action) => {
//     console.log(action.newTheme);
//     switch (action.type) {
//       case "changeTheme":
//         return {
//           ...state,
//           theme: action.newTheme,
//         };

//       default:
//         return state;
//     }
//   };

//   return (
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             <button onClick={signIn}>Login</button>
//             <button onClick={signOut}>Logout</button>
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <Home />
//       </div>
//     </StateProvider>
//   );
// };

export default App;
