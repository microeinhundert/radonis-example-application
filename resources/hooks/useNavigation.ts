import { CogIcon, CubeIcon, HomeIcon } from "@heroicons/react/24/outline";

import { useAuthenticatedUser } from "./useAuthenticatedUser";
import { useNavigationBuilder } from "./useNavigationBuilder";

export function useNavigation() {
  const user = useAuthenticatedUser();
  const navigationBuilder = useNavigationBuilder();

  return {
    primary: navigationBuilder.make([
      {
        identifier: "home",
        routeIdentifier: "home",
        icon: HomeIcon,
        canAccess: () => !user,
      },
      {
        identifier: "dashboard",
        routeIdentifier: "dashboard",
        icon: HomeIcon,
        canAccess: () => !!user,
      },
      {
        identifier: "gardens",
        routeIdentifier: "gardens.index",
        icon: CubeIcon,
        canAccess: () => !!user,
      },
    ]),
    secondary: navigationBuilder.make([
      {
        identifier: "settings",
        routeIdentifier: "settings",
        icon: CogIcon,
        canAccess: () => !!user,
      },
    ]),
  };
}
