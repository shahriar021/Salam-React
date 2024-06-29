// const heading = React.createElement(
//   "h2",
//   { className: "reactName" },
//   "this is by react from app."
// );

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Footer } from "./src/components/Footer";
import About from "./src/components/About";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./src/components/ErrorPage";
import Contact from "./src/components/Contact";
import ResMenu from "./src/components/ResMenu";
import Shimmer from "./src/components/Shimmer";
//import Gadget from "./src/components/Gadget";

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("p", { id: "1" }, "this is a p tag"),
//     React.createElement("p", { id: "2" }, "this is a p tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("p", { id: "3" }, "this is a p tag"),
//     React.createElement("p", { id: "4" }, "this is a p tag"),
//   ]),
// ]);

//no need of react.createElement ...because jsx is actually doing react.createElement by babel..

// const jsx = <h1>this is jsx..</h1>;

// ------------------------episode 3-----------------------------

// function Child() {
//   return <h2>i am a child.</h2>;
// }

// const Child2 = function () {
//   return <h2>i am child 2</h2>;
// };

// const Parent = () => {
//   const name = "shahriar";
//   return (
//     <div>
//       <Child />
//       {Child()}
//       <Child>
//         <Child2 />
//       </Child>
//       <Child2 />
//       {Child2()}
//     </div>
//   );
// };

// const Icon = () => {
//   return <h1>ICON</h1>;
// };

// const Search = () => {
//   return <input type="text" />;
// };
// const User = (props) => {
//   return <h1>i am {props.name}</h1>;
// };
// const HeaderComponent = () => {
//   const name = "shahriar";
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-around",
//         }}
//       >
//         <Icon />
//         <Search />
//         <User name="shahriar" />
//       </div>
//     </div>
//   );
// };

// ---------------------------------episode 4------------------------------

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logoContainer">
//         <img
//           className="logo"
//           src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
//           alt="image logo"
//         />
//       </div>
//       <div className="nav-item">
//         <ul>
//           <li>home</li>
//           <li>about</li>
//           <li>contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const obj = {
//   foods: [
//     {
//       type: "Pizza",
//       image:
//         "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg",
//       cuisine: "Italian",
//       delivery_time: "30 minutes",
//       rating: 4.5,
//     },
//     {
//       type: "Sushi",
//       image:
//         "https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=x_0,y_0,h_720,w_1280,c_fill/w_800",
//       cuisine: "Japanese",
//       delivery_time: "45 minutes",
//       rating: 4.8,
//     },
//     {
//       type: "Burger",
//       image:
//         "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/3/21/0/fnd_pasta-istock.jpg.rend.hgtvcom.1280.720.suffix/1490188710731.jpeg",
//       cuisine: "American",
//       delivery_time: "25 minutes",
//       rating: 4.2,
//     },
//     {
//       type: "Pad Thai",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHbo5hvrf7weigD6VfHDK9HxeZhkVpjZVbcRaZlj1Ng&s",
//       cuisine: "Thai",
//       delivery_time: "35 minutes",
//       rating: 4.6,
//     },
//     {
//       type: "Pad Thai",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHbo5hvrf7weigD6VfHDK9HxeZhkVpjZVbcRaZlj1Ng&s",
//       cuisine: "Thai",
//       delivery_time: "35 minutes",
//       rating: 4.6,
//     },
//     {
//       type: "Pad Thai",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHbo5hvrf7weigD6VfHDK9HxeZhkVpjZVbcRaZlj1Ng&s",
//       cuisine: "Thai",
//       delivery_time: "35 minutes",
//       rating: 4.6,
//     },
//     {
//       type: "Pad Thai",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHbo5hvrf7weigD6VfHDK9HxeZhkVpjZVbcRaZlj1Ng&s",
//       cuisine: "Thai",
//       delivery_time: "35 minutes",
//       rating: 4.6,
//     },
//     {
//       type: "Pad Thai",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHbo5hvrf7weigD6VfHDK9HxeZhkVpjZVbcRaZlj1Ng&s",
//       cuisine: "Thai",
//       delivery_time: "35 minutes",
//       rating: 4.6,
//     },
//     {
//       type: "Pad Thai",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHbo5hvrf7weigD6VfHDK9HxeZhkVpjZVbcRaZlj1Ng&s",
//       cuisine: "Thai",
//       delivery_time: "35 minutes",
//       rating: 4.6,
//     },
//     {
//       type: "Pad Thai",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHbo5hvrf7weigD6VfHDK9HxeZhkVpjZVbcRaZlj1Ng&s",
//       cuisine: "Thai",
//       delivery_time: "35 minutes",
//       rating: 4.6,
//     },
//   ],
// };

// const RestaurentContainer = ({ item }) => {
//   const { type, rating, cuisine, delivery_time } = item;
//   return (
//     <div>
//       <div className="restaurentCard">
//         <div className="restaurentImg">
//           <img src={item.image} className="cardImage" />
//         </div>
//         <div>
//           {<h5 className="resName">{type}</h5>}
//           <h5 className="star">{rating}/5</h5>
//           <h5 className="cuisine">{cuisine}</h5>
//           <h5 className="time">{delivery_time}</h5>
//         </div>
//         ;
//       </div>
//     </div>
//   );
// };

// const Body = () => {
//   const { foods } = obj.foods;
//   console.log(foods);
//   return (
//     <div className="mainBody">
//       <div className="search">
//         <input type="text" />
//         <button>search</button>
//       </div>
//       <div className="resContainer">
//         {obj.foods.map((res, i) => (
//           <RestaurentContainer key={i} item={res} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Footer = () => (
//   <div className="footer">
//     <ul>
//       <li>facebook </li>
//       <li>contact </li>
//       <li>all right ...... </li>
//     </ul>
//   </div>
// );

const Gadget = lazy(() => import("./src/components/Gadget.jsx"));

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gadget",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Gadget />
          </Suspense>
        ),
      },
      {
        path: "/resaurant/:onno",
        element: <ResMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const rDom = ReactDOM.createRoot(document.getElementById("id"));

rDom.render(<RouterProvider router={route} />);
