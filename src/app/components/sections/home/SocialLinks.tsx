import { FC } from 'react';

export interface SocialLinksProps {
  links?: {
    url: string;
    title: string;
    icon: string;
  }[];
}

const SocialLinks: FC<SocialLinksProps> = ({ links = [] }) => {
  return (
    <ul className="social-link">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="bottom" title={"View " + link.title }>
            <i className={`fa ${link.icon}`} aria-hidden="true"></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
