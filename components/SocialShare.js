import { SocialIcon } from 'react-social-icons';

const SocialShare = ({ currentUrl }) => {
  return (
    <div className="flex flex-row gap-2">
      <SocialIcon url={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" />
      <SocialIcon url={`https://www.instagram.com/?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" />
      <SocialIcon url={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" />
      <SocialIcon
        url={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon url={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" />
      <SocialIcon url={`mailto:?subject=Je te conseille ce jardinier&body=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" />
    </div>
  );
};

export default SocialShare;
