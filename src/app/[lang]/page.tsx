import { langType } from "./langs";
import StoreProvider from "@/app/StoreProvider";
import { langType } from "./langs";
import StoreProvider from "@/app/StoreProvider";
import DesktopHeader from "@/components/ui/header/desktop/DesktopHeader";
import { getLanguage } from "@/utils/langs";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: langType }>;
}) {
  const { lang } = await params;
  const language = await getLanguage(lang);

  return (
    <StoreProvider language={language}>
      <DesktopHeader language={language} />
      {/* other components that need the store can go here */}
    </StoreProvider>
  );
}
