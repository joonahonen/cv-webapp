import LinkImage from "../single-components/LinkImage";
import github from "../../assets/github-mark.png";
import linkedIn from "../../assets/InBug-Black.png";
import discord from "../../assets/Discord-Symbol-Black.png";
import instagram from "../../assets/Instagram_Glyph_Black.png";
import steam from "../../assets/Steam_icon_logo.png";
import email from "../../assets/gmail.png";
import "./LinkList.css";

// LinkList component: used in Profile, to gather links to different platforms
// Currently using placeholder images, will be updated with better images
function LinkList() {
  return (
    <>
    <div className="link-list">
      <LinkImage imageLink={github} link="https://github.com/joonahonen" alt="GitHub" />
      <LinkImage imageLink={linkedIn} link="https://www.linkedin.com/in/joona-ahonen-b9239a38b/" alt="LinkedIn" />
      <LinkImage imageLink={discord} link="temp" alt="Discord" />
      <LinkImage imageLink={instagram} link="temp" alt="Instagram" />
      <LinkImage imageLink={steam} link="temp" alt="Steam" />
      <LinkImage imageLink={email} link="temp" alt="Email" />
    </div>
    </>
  );
}

export default LinkList;
