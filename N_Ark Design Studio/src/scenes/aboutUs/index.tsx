import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutus" className="w-full bg-primary-100 py-14">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
      >
        <motion.div
          className="mx-auto w-5/6 text-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="">
            <HText>ABOUT US</HText>
            <p className="pt-5">
            We are an architectural team with the passion to see projects manifest that are critically meaningful and creatively unique. Our studio’s focus is on the exploration of Design Strategies that mediate and reinterpret the boundary between traditional/cultural values and contemporary Indian living.
            </p>
            <p>
            We believe in identifying, engaging deeply with and simplifying the complexities of projects. We go by the motto that Good Design is always simple.
            </p>
            <p className="pb-5">
            "Don't do something simply cause many before us did it that way. Try to understand the context of your problem thoroughly and you'll discover your solution."
            </p>

            <HText>
              OUR TEAM
            </HText>
            <HText>
              FOR DESIGN
            </HText>
            <p className="py-5">
            Each member of our team will bring a set of unique and exceptional skills to your project. Our architects have extensive experience with a wide array of project types. Whether it’s new construction, renovation or remodel, our professionals understand the intricacies and specific characteristics that each type of structure demands. As with all of our projects, N_Ark studio will approach yours with an innovative eye, integration of technology, preservation of existing elements when desired, and attention to sustainability.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
