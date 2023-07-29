import * as UserViews from "../constants/AllViews";
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
