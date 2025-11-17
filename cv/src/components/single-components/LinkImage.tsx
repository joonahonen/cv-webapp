// LinkImage component used in profile to create a small image that has a link
type Props = {
  imageLink: string;
  link: string;
  alt: string;
};

function LinkImage({ imageLink, link, alt }: Props) {
  return(
  <>
    <a href={link}>
      <div className="link-image">
        <img src={imageLink} alt={alt}></img>
      </div>
    </a>
  </>
  );
}

export default LinkImage;
