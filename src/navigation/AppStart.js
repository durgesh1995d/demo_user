// import Login from '../screen/Loginpage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListing from '../screen/ProductListing';
import AddProduct from '../screen/AddProduct';
import EditProduct from '../screen/EditProduct';
import Login from '../screen/Logipage';
import ProductDetail from '../screen/ProductDetail';
import Profile from '../screen/Profile';
import SplashSreen from '../screen/SplashSreen';
import NavigateSwitch from './NavigateSwitch';

const Stack = createNativeStackNavigator();

const AppStart = () => {
  return (
    <Stack.Navigator name={'AppStart'} initialRouteName="SplashSreen">
      <Stack.Screen name="SplashSreen" component={SplashSreen} />
      <Stack.Screen name="Auth" component={NavigateSwitch} />

      <Stack.Screen name="Product" component={ProductListing} />
      <Stack.Screen name="Profile" component={Profile} />

      <Stack.Screen name="Product Detail" component={ProductDetail} />

      <Stack.Screen name="Add Product" component={AddProduct} />
      <Stack.Screen name="Edit Product" component={EditProduct} />
    </Stack.Navigator>
  );
};
export default AppStart;
