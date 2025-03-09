import { customFlowbiteTheme } from "@/configs/customFlowbiteTheme";
import { Flowbite, type CustomFlowbiteTheme } from "flowbite-react";

export default function CustomFlowbiteTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Flowbite theme={{ theme: customFlowbiteTheme }}>{children}</Flowbite>;
}
