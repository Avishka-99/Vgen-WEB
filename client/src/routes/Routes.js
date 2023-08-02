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
export const adminRoutes = [
	{id: 1, path: '/home', element: <UserViews.AdminHome />},
	{id: 2, path: '/staff', element: <UserViews.Staff />},
	{id: 3, path: '/analytics', element: <UserViews.Analytics />},
	{id: 4, path: '/riders', element: <UserViews.Riders />},
	// { id: 5, path: "/shopping", element: <UserViews.Shopping/> },
	{id: 5, path: '/profile', element: <UserViews.Profile />},
	{id: 6, path: '/sales', element: <UserViews.Sales />},
];
export const staffRoutes = [
  { id: 1, path: "/home", element: <UserViews.StaffHome/> },
  { id: 2, path: "/payments", element: <UserViews.Payments/> },
  { id: 3, path: "/complains", element: <UserViews.Complains/> },
  { id: 4, path: "/profile", element: <UserViews.Profile/> },
];
