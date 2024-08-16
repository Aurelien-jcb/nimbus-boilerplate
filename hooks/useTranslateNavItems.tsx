import { NavItem } from "@/types";

export function getTranslatedNavItems(
  t: (key: string) => string,
  items: NavItem[],
): NavItem[] {
  return items.map((item) => ({
    ...item,
    title: item.labelKey ? t(item.labelKey) : item.title,
  }));
}
