import * as UserViews from "../constants/AllViews";
// import Home from '../views/customer/Home'
// import Order from "../views/customer/Order";
// import Categories from "../views/customer/Categories";
// import Community from "../views/customer/Community";
// import Feed from "../views/customer/Feed";
// import Restaurants from "../views/customer/Restaurants";
// import RestaurantHome from "../views/restaurant/RestaurantHome";
// import RestaurantProducts from "../views/restaurant/RestaurantProducts";
// import OrdersView from "../views/restaurant/OrdersView";
// import Reservation from "../views/restaurant/Reservation";
// import Shopping from "../views/restaurant/Shopping";
// import RestaurantProductAdd from "../views/restaurant/RestaurantProductAdd";
export const customerRoutes = [
  { id: 1, path: "/home", element: <UserViews.Home /> },
  { id: 2, path: "/category", element: <UserViews.Categories/> },
  { id: 3, path: "/community", element: <UserViews.Community/> },
  { id: 4, path: "/feed", element: <UserViews.Feed/> },
  { id: 5, path: "/restaurants", element: <UserViews.Restaurants/> },
];
export const restaurantRoutes = [
  { id: 1, path: "/home", element: <UserViews.RestaurantHome/> },
  { id: 2, path: "/products", element: <UserViews.RestaurantProducts/> },
  { id: 3, path: "/orders", element: <UserViews.OrdersView/> },
  { id: 4, path: "/reservation", element: <UserViews.Reservation/> },
  { id: 5, path: "/shopping", element: <UserViews.Shopping/> },
  { id: 6, path: "/addRestaurantProducts", element: <UserViews.RestaurantProductAdd/> },
];
