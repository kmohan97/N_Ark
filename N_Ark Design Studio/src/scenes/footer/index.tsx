import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import Link from "../navbar/Link";
import { getImageUrl } from "../projects";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex text-gray-300">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="flex items-center">
            <img alt="logo" src={getImageUrl('n ark 3.jpg')} width={40} height={40} />
            <p className="text-lg  font-medium text-white">
              N_Ark Design Studio
            </p>
          </div>
          <p className="mt-5">
            Follow us on Social Media
          </p>
          <div className="flex py-5">
            <a href='https://www.instagram.com/n_arkdesignstudio1/?igsh=c2VrNTlkNjl5NWg5' target="_blank">
              <img src={getImageUrl('insta_black.png')} width={20} height={20} />
            </a>

            {/* <a href=''>
                <img src={getImageUrl('fb.png')} width={20} height={20} />
              </a> */}

          </div>
          <p>© N_Ark Studio All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-white">What We Do</h4>
          <div className="my-5">
            <Link
              page="Our Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isBackgroundDark={true}
            />
          </div>
          <div className="my-5">
            <Link
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isBackgroundDark={true}

            />
          </div>
          <div className="">
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isBackgroundDark={true}

            />
          </div>

        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-white">Contact Us</h4>
          <p className="my-5">Contact our office through our contact form in order for us to reach you much faster.</p>
          <div className="">
              <p>
                <a href="tel: +917377504478">
                  Tel: +91-7377504478
                </a>
              </p>
              <p><a href="mailto:narkdesignstudio@gmail.com">narkdesignstudio@gmail.com</a>
              </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
