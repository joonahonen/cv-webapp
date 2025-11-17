import LinkList from "../list-components/LinkList";
import profileIcon from "../../assets/omakuva.png";
import "./Profile.css";

// Profile component: Profile section of the webiste (between Header and Body)
function Profile() {
  return (
    <>
      <img src={profileIcon} alt="Profile picture" className="profile-image"></img>
      <h1>Joona Ahonen</h1>
      <h3>CS Student, Computer enthusiast</h3>
      <LinkList/>
    </>
  );
}

export default Profile;
