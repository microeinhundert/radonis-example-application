import CogIcon from "@heroicons/react/24/outline/CogIcon";
import CubeIcon from "@heroicons/react/24/outline/CubeIcon";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";

import { useAuthenticatedUser } from "./useAuthenticatedUser";
import { useNavigationBuilder } from "./useNavigationBuilder";

export function useNavigation() {
  const user = useAuthenticatedUser();
  const navigationBuilder = useNavigationBuilder();

  return {
    primary: navigationBuilder.make([
      {
        messageIdentifier$: "navigation.home",
        routeIdentifier$: "home",
        icon: HomeIcon,
        canAccess: () => !user,
      },
      {
        messageIdentifier$: "navigation.dashboard",
        routeIdentifier$: "dashboard",
        icon: HomeIcon,
        canAccess: () => !!user,
      },
      {
        messageIdentifier$: "navigation.gardens",
        routeIdentifier$: "gardens.index",
        icon: CubeIcon,
        canAccess: () => !!user,
      },
    ]),
    secondary: navigationBuilder.make([
      {
        messageIdentifier$: "navigation.settings",
        routeIdentifier$: "settings",
        icon: CogIcon,
        canAccess: () => !!user,
      },
    ]),
  };
}
