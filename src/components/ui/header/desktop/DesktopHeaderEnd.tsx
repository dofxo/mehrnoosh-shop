import ChangeLanguage from "@/components/ChangeLanguage";
import { Heart } from 'lucide-react';

export default function DesktopHeaderEnd() {
  return (
    <div className="w-[25%]">
      <div className="flex flex-row items-center justify-end gap-1">
        <div className="cursor-pointer transition hover:text-primary">
          <Heart />
        </div>

        <ChangeLanguage />
      </div>
    </div>
  );
}
