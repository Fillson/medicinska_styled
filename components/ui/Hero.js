import Image from "next/image";
import styled from "styled-components";

const StyledHero = styled.div`
  width: 100%;
  height: 200px;

  img {
    height: 100%;
  }
`;

function Hero({ image }) {
  return (
    <StyledHero>
      <Image
        src={image}
        className='nextImage'
        alt='Utskott-Banner'
        height={2000}
        width={2000}
      />
    </StyledHero>
  );
}

export default Hero;
