import { langType } from "./langs";
import StoreProvider from "@/app/StoreProvider";
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
      {/* other components that need the store can go here */}
    </StoreProvider>
  );
}
