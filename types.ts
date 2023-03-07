declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  HomeA: undefined;
  HomeB: undefined;
  SettingsA: undefined;
  SettingsB: undefined;
};
