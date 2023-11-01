export const SIGNIN_URL = '/api/signinuser';
export const SIGNUP_URL = '/api/registeruser';
export const ADD_PRODUCT_URL = '/api/productStore';
export const FETCH_PRODUCTS_URL = '/api/productGet';
export const VERIFY_USER_URL = '/api/verifyuser';
export const FETCH_ALL_PRODUCTS_URL = '/api/allProduct';
export const GET_ORDER_TYPE_URL = 'api/orderTypes';
export const GET_ORDER_COUNT_URL = 'api/orderCountDetails';
export const GET_Profile_URL ='api/getProfile/:id';
    ;
//
export const productUpload_URL = '/api/productStore';
export const productGet_URL = '/api/productGet';
export const verifyUser_URL = '/api/verifyuser';
export const sellProduct_URL = '/api/sellProduct';
export const FetchRestaurantProducts_URL = '/api/fetchrestaurantproducts';
export const orderPost_URL='/api/orderPost';
export const createPost_URL='/api/createPost';
export const getPost_URL='/api/getFeed';
export const deletePost_URL='/api/deleteFeed/${postId}';
export const updateFeed_URL='/api/updateFeed/${postId}';
export const UpdateLocation_URL='/api/UpdateLocation';
//Restaurant manager apis
export const itemAdd_url = '/api/productAdd';
export const restaurantDetails_URL = '/api/resDetailsGet';
export const getAllProduct_URL='/api/allProduct';
export const getOrderType_URL='api/orderTypes';
export const getOrderCountDetail_URL='api/orderCountDetails';

export const getOrderDetails_URL='api/getOrderDetails';
export const getOrderMoreDetails_URL='api/getOrderMoreDetails';
export const getOrderDetailsSorted_URL='api/getOrderSortedDetails';

export const getOrderTypeCountToday_URL='api/OrderTypeCountToday';
export const getRestaurantAcceptedOrderDetailsInTableToday_URL='api/getRestaurantAcceptedOrderDetailsInTableToday';
export const getRestaurantOrderDetailsInSortedByTypeWithAccepted_URL='api/getRestaurantOrderDetailsInSortedByTypeWithAccepted'

export const getMostOrderCountWithOutLimit_URL='api/getMostOrderCountWithOutLimit';
export const getMostOrderCountWithLimit_URL='api/getMostOrderCountWithLimit';
export const getShopDetails_URL='api/getShopDetails';
export const getReservationDetails_URL="api/getReservationDetails"
export const addComplain_URL="api/addComplain"
export const getAllComplainIDRelevantRestaurant_URL="api/getAllOrderIDRelevantRestaurant"
export const getComplain_URL="api/getComplain"
export const getAcceptOrders_URL="api/getAcceptOrders"
export const updateOrderState_URL="api/updateOrderState"
export const updateOrderStateToFinal_URL="api/updateOrderStateToFinal"
export const updateOrderRejectState_URL="api/updateOrderRejectState"
export const getAllRawProductsDetails="api/getAllRawProductsDetails"
export const deleteComplain_URL="api/deleteComplain"
export const updateReservationState_URL='api/updateReservationState'
export const getAcceptedReservationDetails_URL='api/acceptedReservationDetails'
//
//product manufacture apis
export const addRowProducts_URL='/api/rowProductStore';
export const getAllRowProduct_URL='/api/allRowProduct';
export const getAllComplainIDRelevantManufacture_URL='api/getAllOrderIDRelevantManufacture'
export const getManufactureOrderDetails_URL='api/manufactureOrderDetails'
export const getManufactureOrderCountDetails_URL='api/manufactureOrderCountsDetails'
export const getManufactureMostOrderWithLimit_URL='api/getManufactureMostOrderCountWithLimit'
export const getManufactureMostOrderWithoutLimit_URL='api/getManufactureMostOrderCountWithOutLimit'
export const getManufactureMostOrderTypeCountToday_URL='api/getManufactureMostOrderTypeCountToday'
export const getManufactureMostOrderCountDetailsToday_URL='api/getManufactureMostOrderCountDetailsToday'
export const getManufactureMostOrderDetailsInTableToday_URL='api/getManufactureMostOrderDetailsInTableToday'
export const getManufactureOrderMoreDetails_URL='api/getManufactureOrderMoreDetails'
export const getManufactureOrderDetailsInSortedByType_URL='api/getManufactureOrderDetailsInSortedByType'
export const getManufactureAcceptedOrderDetailsInTableToday_URL='api//getManufactureAcceptedOrderDetailsInTableToday'
export const getManufactureOrderDetailsInSortedByTypeWithAccepted_URL='api/getManufactureOrderDetailsInSortedByTypeWithAccepted'
export const deleteProduct_URL='api/deleteProduct'

//admin apis
export const FETCH_ALL_STAFF = '/api/fetchstaff';
export const FETCH_ALL_CATEGORIES = '/api/fetchallcategories';
export const FETCH_ALL_FOODS = '/api/fetchallfoods';
