import React from 'react';
import {useTheme} from 'react-native-paper';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ACCOUNTS_NAV,
  HOME_NAV,
  INVOICES_NAV,
  PAYMENTS_NAV,
  SETTINGS_NAV,
  TAX_NAV,
} from './constants/navigation';

import Home from '../screens/Home/Home';
import Accounts from '../screens/Accounts/Accounts';
import Payments from '../screens/Payments/Payments';
import Invoices from '../screens/Invoices/Invoices';
import Tax from '../screens/Tax/Tax';
import Settings from '../screens/Settings/Settings';

import {FONTS} from '../utils/fonts';

import HomeSolidIcon from '../assets/icons/home-solid.svg';
import HomeKeylineIcon from '../assets/icons/home-keyline.svg';
import AccountsSolidIcon from '../assets/icons/accounts-solid.svg';
import AccountsKeylineIcon from '../assets/icons/accounts-keyline.svg';
import PaymentsSolidIcon from '../assets/icons/payments-solid.svg';
import PaymentsKeylineIcon from '../assets/icons/payments-keyline.svg';
import InvoicesSolidIcon from '../assets/icons/invoices-solid.svg';
import InvoicesKeylineIcon from '../assets/icons/invoices-keyline.svg';
import TaxSolidIcon from '../assets/icons/tax-solid.svg';
import TaxKeylineIcon from '../assets/icons/tax-keyline.svg';
import SettingsSolidIcon from '../assets/icons/settings-solid.svg';
import SettingsKeylineIcon from '../assets/icons/settings-keyline.svg';

export type MainBottomNavParamList = {
  [HOME_NAV]: undefined;
  [ACCOUNTS_NAV]: undefined;
  [PAYMENTS_NAV]: undefined;
  [INVOICES_NAV]: undefined;
  [TAX_NAV]: undefined;
  [SETTINGS_NAV]: undefined;
};

const Tab = createBottomTabNavigator<MainBottomNavParamList>();

const MainBottomNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.black,
        tabBarInactiveTintColor: theme.colors.coolGrey,
        tabBarLabel: ({focused, color, children}) => {
          return (
            <Text
              style={{
                fontSize: 10,
                fontFamily: focused ? FONTS.semiBold : FONTS.regular,
                color: color,
              }}>
              {children}
            </Text>
          );
        },
      }}
      initialRouteName={ACCOUNTS_NAV}>
      <Tab.Screen
        name={HOME_NAV}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <HomeSolidIcon /> : <HomeKeylineIcon />;
          },
        }}
      />
      <Tab.Screen
        name={ACCOUNTS_NAV}
        component={Accounts}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <AccountsSolidIcon /> : <AccountsKeylineIcon />;
          },
        }}
      />
      <Tab.Screen
        name={PAYMENTS_NAV}
        component={Payments}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <PaymentsSolidIcon /> : <PaymentsKeylineIcon />;
          },
        }}
      />
      <Tab.Screen
        name={INVOICES_NAV}
        component={Invoices}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <InvoicesSolidIcon /> : <InvoicesKeylineIcon />;
          },
        }}
      />
      <Tab.Screen
        name={TAX_NAV}
        component={Tax}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <TaxSolidIcon /> : <TaxKeylineIcon />;
          },
        }}
      />
      <Tab.Screen
        name={SETTINGS_NAV}
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <SettingsSolidIcon /> : <SettingsKeylineIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default MainBottomNavigation;
