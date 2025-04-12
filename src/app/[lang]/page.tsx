import BannersOne from "../components/BannersOne";
import BannersTwo from "../components/BannersTwo";

export default async function Home() {
  return (
    <main className="container grid gap-[30px] py-[20px]">
      <BannersOne />
      <BannersTwo />
    </main>
  );
}
