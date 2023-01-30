import { useI18n, useRoute, useUrlBuilder } from "@microeinhundert/radonis";

interface NavigationBuilderItem {
  messageIdentifier$: string;
  routeIdentifier$: string;
  icon?: IconComponent;
  canAccess?: () => boolean;
}

export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  icon?: IconComponent;
}

export function useNavigationBuilder() {
  const { formatMessage$ } = useI18n();
  const route = useRoute();
  const urlBuilder = useUrlBuilder();

  function make(items: NavigationBuilderItem[]) {
    return items
      .filter(({ canAccess }) => canAccess?.() ?? true)
      .map<NavigationItem>(({ messageIdentifier$, routeIdentifier$, icon }) => ({
        name: formatMessage$(messageIdentifier$),
        href: urlBuilder.make$(routeIdentifier$),
        current: route.isCurrent$(routeIdentifier$),
        icon,
      }));
  }

  return {
    make,
  };
}
