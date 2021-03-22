import { createContext, useState, useEffect, useContext } from "react";
import { CarContext } from "../contexts/CarContext";

export const UserContext = createContext();


const UserContextProvider = (props) => {
  const { boughtCars, setBoughtCars } = useContext(CarContext)

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([
    {email: "victorlillowerngren@gmail.com",
    fullName: "Victor Lillo Werngren",
    orders:[(2) [{}, {}]],
    password: "123",
    personalNumber: "123",
    phoneNumber: "0730713949",
    userName: "123",}
  ]);
  const [orderInfo, setOrderInfo] = useState([
    {
      address: "Södra Esplanaden 9a",
      cardNumber: "123123",
      cardOwner: "13213",
      city: "Lund",
      cvv: "132",
      delivery: "Pick up at store",
      email: "victorlillowerngren@gmail.com",
      expiration: "13221",
      firstName: "Victor",
      lastName: "Werngren",
      payment: "Card",
      phone: "+46730713949",
      postalnr: "22354",
      orderNumber: "1234567",
      orderDate: ["2021-03-04", "19:00", "Monday"],
      price: 235697,
      date: "",
      boughtCars: [{
        carImg: "../assets/car-pictures/Chevrolet-Camaro-1973.jpg",
        city: "Santa Rosa",
        descLong: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.↵↵Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.↵↵Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        descShort: "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
        make: "Chevrolet",
        miles: 15432,
        model: "Camaro",
        price: 554963,
        vin: "1D4PT5GK0BW487259",
        year: 1973
      },{
        carImg: "../assets/car-pictures/Chevrolet-Camaro-1973.jpg",
        city: "Santa Rosa",
        descLong: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.↵↵Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.↵↵Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        descShort: "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
        make: "Chevrolet",
        miles: 15432,
        model: "Camaro",
        price: 554963,
        vin: "1D4PT5GK0BW48725",
        year: 1973
      }]
    },{
      address: "Södra Esplanaden 9a",
      cardNumber: "123123",
      cardOwner: "13213",
      city: "Lund",
      cvv: "132",
      delivery: "Pick up at store",
      email: "victorlillowerngren@gmail.com",
      expiration: "13221",
      firstName: "Victor",
      lastName: "Werngren",
      payment: "Card",
      phone: "+46730713949",
      postalnr: "22354",
      orderNumber: "1234567",
      orderDate: ["2021-03-04", "19:00", "Monday"],
      price: 235697,
      date: "",
      boughtCars: [{
        carImg: "../assets/car-pictures/Chevrolet-Camaro-1973.jpg",
        city: "Santa Rosa",
        descLong: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.↵↵Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.↵↵Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        descShort: "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
        make: "Chevrolet",
        miles: 15432,
        model: "Camaro",
        price: 554963,
        vin: "1D4PT5GK0BW487259",
        year: 1973
      }]
    }
  ]);

  const values = {
    boughtCars,
    setBoughtCars,
    orderInfo,
    setOrderInfo,
    loggedInUser,
    setLoggedInUser,
    users,
    setUsers
  }
  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>);
}

export default UserContextProvider;