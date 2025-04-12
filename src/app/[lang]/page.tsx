import BannersOne from "../components/BannersOne";
import BannersTwo from "../components/BannersTwo";
import TopCategories from "../components/TopCategories";

export default async function Home() {
  return (
    <main className="container grid gap-[30px] py-[20px]">
      <TopCategories />
      <BannersOne />
      <BannersTwo />
    </main>
  );
}
