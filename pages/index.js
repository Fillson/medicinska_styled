import Slider from "../components/HomePage/Slider";
import { SliderData } from "../SliderData";

export default function Home() {
  return (
    <>
      <Slider slides={SliderData} />
    </>
  );
}
