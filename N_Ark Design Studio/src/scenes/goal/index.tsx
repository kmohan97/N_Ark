import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "ABOUT US",
    description:
      'We build your future. Your dreams, needs and goals guide our ideas and solutions from the initial concepts to the ribbon cutting.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "OUR GOAL",
    description:
      "Our goal is to create a better everyday life for many people concepts to the ribbon cutting.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "MISSION",
    description:
      "It’s our mission at N_Ark studio to provide client professional service — and to offer their project exactly the way they want.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Goals = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-14">
      <motion.div>
        {/* HEADER */}
        <motion.div
          className="md:my-5 align-center justify-between md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>INNOVATIVE DESIGN SOLUTIONS
                  FOR YOUR SPACE
          </HText>
          <p className="my-5 text-sm">
          Every design process is unique, that's where we come in. 
          We pin down the purpose, design a space that truly resonates with you, and explain why there are so many shades of white. 
          Yes, it makes a difference, and don't worry, we'll find you the perfect one. 


          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 w-auto gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        
      </motion.div>
    </section>
  );
};

export default Goals;
