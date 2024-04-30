import HomePageHero from "@/components/HomePageHero";
import MeeetingTypeList from "@/components/MeeetingTypeList";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <HomePageHero />

      <MeeetingTypeList />
    </section>
  );
};

export default Home;
