import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen5170511Navigator from '../features/BlankScreen5170511/navigator';
import SignIn43170510Navigator from '../features/SignIn43170510/navigator';
import SignUp24170509Navigator from '../features/SignUp24170509/navigator';
import Feed5170508Navigator from '../features/Feed5170508/navigator';
import BlankScreen1170476Navigator from '../features/BlankScreen1170476/navigator';
import BlankScreen0170474Navigator from '../features/BlankScreen0170474/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen5170511: { screen: BlankScreen5170511Navigator },
SignIn43170510: { screen: SignIn43170510Navigator },
SignUp24170509: { screen: SignUp24170509Navigator },
Feed5170508: { screen: Feed5170508Navigator },
BlankScreen1170476: { screen: BlankScreen1170476Navigator },
BlankScreen0170474: { screen: BlankScreen0170474Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
