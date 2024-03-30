import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import AboutUs from "@/scenes/aboutUs";
import Goals from "@/scenes/goal";
import ContactUs from "@/scenes/contactUs";
import Projects from "@/scenes/projects";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { debounce } from "lodash";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [height, setHeight] = useState(0)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      setIsScrolling(true);
      handleScrolling();
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedPage]);

  const handleScrolling = debounce(() => {
    setIsScrolling(false);
  }, 300);

  return (
    <div className="">
      <Navbar
        setHeight={setHeight}
        isTopOfPage={isTopOfPage}
        isScrolling={isScrolling}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} 
        height={height} 
      />
      <Goals setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
    </div>
  );
}

export default App;
