import * as UserViews from '../constants/AllViews';
import React from 'react';
export const customerRoutes = [
	{id: 1, path: '/home', element: <UserViews.Home />},
	{id: 2, path: '/category', element: <UserViews.Categories />},
	{id: 3, path: '/community', element: <UserViews.Community />},
	{id: 4, path: '/feed', element: <UserViews.Feed />},

	{id: 5, path: '/restaurants', element: <UserViews.Restaurants />},
	{id: 6, path: '/cart', element: <UserViews.Cart />},
	{id: 7, path: '/about', element: <UserViews.About />},
	{id: 8, path: '/view_profile', element: <UserViews.View_Profile />},
	{id: 9, path: '/SelectedRestaurant', element: <UserViews.SelectedRestaurant />},
	{id: 10, path: '/Recipe', element: <UserViews.Recipe />},
	{id: 11, path: '/recipeForm', element: <UserViews.recipeForm />},
	{id: 12, path: '/location', element: <UserViews.location />},
	{id: 13, path: '/communityOrganizerForm', element: <UserViews.communityOrganizerForm />},
	{id: 14, path: '/SearchResults', element: <UserViews.SearchResults />},
];
export const restaurantRoutes = [
	{id: 1, path: '/home', element: <UserViews.RestaurantHome />},
	{id: 2, path: '/products', element: <UserViews.RestaurantProducts />},
	{id: 3, path: '/orders', element: <UserViews.OrdersView />},
	{id: 4, path: '/reservation', element: <UserViews.Reservation />},
	{id: 5, path: '/shopping', element: <UserViews.Shopping />},
	{id: 6, path: '/Restaurant_complain', element: <UserViews.RestaurantComplain />},
];
export const adminRoutes = [
	{id: 1, path: '/home', element: <UserViews.AdminHome />},
	{id: 2, path: '/staff', element: <UserViews.Staff />},
	{id: 3, path: '/analytics', element: <UserViews.Analytics />},
	{id: 4, path: '/riders', element: <UserViews.Riders />},
	{id: 6, path: '/categories', element: <UserViews.AddCategories />},
	{id: 7, path: '/profile', element: <UserViews.AdminProfile />},
	{id: 8, path: '/sales', element: <UserViews.Sales />},
];
export const staffRoutes = [
	{id: 1, path: '/home', element: <UserViews.StaffHome />},
	{id: 2, path: '/users', element: <UserViews.Users />},
	{id: 3, path: '/payments', element: <UserViews.Payments />},
	{id: 4, path: '/complaints', element: <UserViews.Complaints />},
	{id: 5, path: '/profile', element: <UserViews.Profile />},
];
export const manufactureRoutes = [
	{id: 1, path: '/home', element: <UserViews.ManufactureHome />},
	{id: 2, path: '/row_products', element: <UserViews.RowProducts />},
	{id: 3, path: '/row_orders', element: <UserViews.RowOrderView />},
	{id: 4, path: '/row_complains', element: <UserViews.ManufactureComplains />},
];
