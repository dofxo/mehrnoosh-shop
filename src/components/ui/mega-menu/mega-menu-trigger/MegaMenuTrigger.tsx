import type { MegaMenuTriggerProps } from "./MegaMenuTrigger.d";
import { Button } from "@/components/ui/button";

export default function MegaMenuTrigger({
  icon,
  text,
  ...props
}: MegaMenuTriggerProps) {
  return (
    <Button variant="megaMenu" size="xl" {...props}>
      <div className="h-6 w-6">{icon}</div>
      <span className="">{text}</span>
    </Button>
  );
}
