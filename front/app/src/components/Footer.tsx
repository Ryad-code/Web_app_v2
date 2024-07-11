import {
  BotFooter,
  FooterStyle,
  ItemStyle,
  TopFooter,
  IconStyle,
  Icon,
} from "../styles/Container.style";

import image0 from "../../public/images/github.png";
import image1 from "../../public/images/figma_icon.png";

function Image(id: number) {
  if (id == 0) return <img src={image0}></img>;
  else if (id == 1) return <img src={image1}></img>;
  else if (id == 2) return <img src={image1}></img>;
}

function Footer() {
  return (
    <FooterStyle>
      <TopFooter>Additional technologies and skills:</TopFooter>
      <BotFooter>
        <ItemStyle>
          <div>Call me:</div>
          <div>0631443235</div>
        </ItemStyle>
        <ItemStyle>
          <div>Email:</div>
          <div> ryad.laouedj@gmail.com</div>
        </ItemStyle>
        <IconStyle>
          <Icon src={image0} />
          <Icon src={image1} />
          <Icon src={image1} />
        </IconStyle>
      </BotFooter>
    </FooterStyle>
  );
}

export default Footer;
