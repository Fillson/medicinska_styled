import CardsContainer from "../components/Home/CardsContainer";
import Slider from "../components/Home/Slider";
import News from "../components/Home/News";
import { SliderData } from "../SliderData";
import Welcome from "../components/Home/Welcome";

export default function Home() {
  return (
    <>
      <Slider slides={SliderData} />
      <Welcome />
      <CardsContainer />
      <News />
    </>
  );
}
