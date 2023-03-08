import { NavigatorScreenParams } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<{ HomeA: undefined; HomeB: undefined }>;
  HomeA: undefined;
  HomeB: undefined;
  Settings: NavigatorScreenParams<{
    SettingsA: undefined;
    SettingsB: undefined;
  }>;
  SettingsA: undefined;
  SettingsB: undefined;
};
