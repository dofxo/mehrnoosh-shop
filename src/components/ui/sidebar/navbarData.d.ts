export type SidebarMenuItem = {
  id: string;
  icon?: string;
  label: { en: string; fa: string };
  link?: string;
  children?: SidebarMenuItem;
}[];
