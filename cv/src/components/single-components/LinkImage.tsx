import Link from "../Link";

// LinkImage component used in profile to create a small image that has a link
type Props = {
  imageLink: string;
  link: string;
  alt: string;
};

function LinkImage({ imageLink, link, alt }: Props) {
  return (
    <>
      <Link
        href={link}
        children={
          <div className="link-image">
            <img src={imageLink} alt={alt}></img>
          </div>
        }
      />
    </>
  );
}

export default LinkImage;
