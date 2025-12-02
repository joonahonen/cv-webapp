import LinkImage from "../single-components/LinkImage";
import github from "../../assets/github-mark.png";
import linkedIn from "../../assets/InBug-Black.png";
import discord from "../../assets/Discord-Symbol-Black.png";
import instagram from "../../assets/Instagram_Glyph_Black.png";
import steam from "../../assets/steamlogoblack.png";

import "./LinkList.css";

// LinkList component: used in Profile, to gather links to different platforms
// Currently using placeholder images, will be updated with better images
function LinkList() {
  return (
    <>
      <div className="link-list">
        <LinkImage
          imageLink={github}
          link="https://github.com/joonahonen"
          alt="GitHub"
        />
        <LinkImage
          imageLink={linkedIn}
          link="https://www.linkedin.com/in/joona-ahonen-b9239a38b/"
          alt="LinkedIn"
        />
        <LinkImage
          imageLink={discord}
          link="https://discord.com/users/341936364352176128"
          alt="Discord"
        />
        <LinkImage
          imageLink={instagram}
          link="https://www.instagram.com/joonahonen_"
          alt="Instagram"
        />
        <LinkImage
          imageLink={steam}
          link="https://steamcommunity.com/id/jO2na1/"
          alt="Steam"
        />
      </div>
    </>
  );
}

export default LinkList;
