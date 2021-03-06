import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile142600Navigator from '../features/UserProfile142600/navigator';
import Tutorial142599Navigator from '../features/Tutorial142599/navigator';
import NotificationList142570Navigator from '../features/NotificationList142570/navigator';
import Settings142569Navigator from '../features/Settings142569/navigator';
import Settings142561Navigator from '../features/Settings142561/navigator';
import UserProfile142559Navigator from '../features/UserProfile142559/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile142600: { screen: UserProfile142600Navigator },
Tutorial142599: { screen: Tutorial142599Navigator },
NotificationList142570: { screen: NotificationList142570Navigator },
Settings142569: { screen: Settings142569Navigator },
Settings142561: { screen: Settings142561Navigator },
UserProfile142559: { screen: UserProfile142559Navigator },

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
