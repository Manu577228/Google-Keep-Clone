import { FaYoutube } from "react-icons/fa6";

function Footer() {
  const youtubeLink = "https://youtube.com/@code-with-Bharadwaj";

  const handleYoutubeClick = () => {
    window.location.href = youtubeLink;
  };

  return (
    <div className="footer">
      <p>
        ©️ code-with-Bharadwaj{" "}
        <a href={youtubeLink} onClick={handleYoutubeClick}>
          <FaYoutube size={14} color="red" />
        </a>
      </p>
    </div>
  );
}

export default Footer;
