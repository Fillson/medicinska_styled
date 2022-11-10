import CardsContainer from "../components/Home/CardsContainer";
import Slider from "../components/Home/Slider";
import News from "../components/Home/News";
import { SliderData } from "../SliderData";

export default function Home() {
  return (
    <>
      <Slider slides={SliderData} />
      <CardsContainer />
      <News />
    </>
  );
}
