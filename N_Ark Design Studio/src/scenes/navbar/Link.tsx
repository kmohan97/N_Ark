import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isBackgroundDark?: boolean;
};

const Link = ({ page, selectedPage, setSelectedPage, isBackgroundDark }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  
  return (
    <div className={`${isBackgroundDark ? "text-gray-300" : "text-gray-900"}`}>

      <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-gray-400" : ""}
          transition duration-500
          ${isBackgroundDark ? "hover:text-white" : "hover:text-gray-400"}
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        <p className={`${isBackgroundDark ? "" : "text-lg"}`}>
        {page}
        </p>
         
      </AnchorLink>
      </div>

  );
};

export default Link;
