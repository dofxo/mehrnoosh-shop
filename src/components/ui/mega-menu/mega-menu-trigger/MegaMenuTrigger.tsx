import type { MegaMenuTriggerProps } from "./MegaMenuTrigger.d";
import { Button } from "@/components/ui/button";

export default function MegaMenuTrigger({
  icon,
  text,
  ...props
}: MegaMenuTriggerProps) {
  return (
    <Button
      variant="megaMenu"
      className="flex ltr:flex-row-reverse rtl:flex-row"
      size="xl"
      {...props}
    >
      <span className="-mb-1">{text}</span>
      <div className="h-6 w-6">{icon}</div>
    </Button>
  );
}
