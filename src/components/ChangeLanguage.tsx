import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DirectionWrapper from "@/components/ui/direction";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { changeCurrentLanguage } from "@/lib/features/language/languageSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function ChangeLanguage() {
  const language = useAppSelector((state) => state.language.languageData);
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage,
  );

  const dispatch = useAppDispatch();

  const router = useRouter();
  const pathname = usePathname();

  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

  const handleSelectChange = (value: string) => {
    setSelectedLanguage(value);
  };

  const handleChangeLanguage = () => {
    const segments = pathname.split("/");
    segments[1] = selectedLanguage;
    const newPath = segments.join("/");
    router.push(newPath);

    dispatch(changeCurrentLanguage(selectedLanguage));
  };

  return (
    <DirectionWrapper>
      <Dialog>
        <DialogTrigger>
          <div className="cursor-pointer transition hover:text-primary">
            <LanguageOutlinedIcon />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-5">
              {language.header.changeLanguage.title}
            </DialogTitle>
            <Select value={selectedLanguage} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue
                  placeholder={language.header.changeLanguage.searchPlaceholder}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fa">
                  {language.header.changeLanguage.fa}
                </SelectItem>
                <SelectItem value="en">
                  {language.header.changeLanguage.en}
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="!mt-5 mt-5 flex items-center justify-center">
              <Button className="w-1/2" onClick={handleChangeLanguage}>
                {language.header.changeLanguage.button}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </DirectionWrapper>
  );
}
