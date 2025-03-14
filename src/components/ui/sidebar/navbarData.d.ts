export type SidebarMenuItem = {
  id: string;
  icon?: FC<SVGProps<SVGSVGElement>> | undefined;
  label: { en: string; fa: string };
  link?: string;
  children?: SidebarMenuItem;
}[];
