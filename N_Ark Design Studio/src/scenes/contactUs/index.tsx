import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { getImageUrl } from "../projects";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg border-gray-300 border-2
  px-5 py-3 placeholder-gray-400`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
    setTimeout(() => {
      let output = document.getElementById('container-form');
      output?.reset();
    }, 2000);
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 py-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            CONTACT OUR
          </HText>
          <HText>
            OFFICE
          </HText>

        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">


          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div>
              <p>
                Contact our office through our contact form in order for us to reach you much faster.
              </p>
            </div>
            <div className="pt-5">
              <p>
                <a href="tel: +917377504478">
                  Tel: +91-7377504478
                </a>
              </p>
              <p><a href="mailto:narkdesignstudio@gmail.com">narkdesignstudio@gmail.com</a>
              </p>
            </div>
            <div className="py-5">
              <p>
                Address:
              </p>
              <p>
                - Brahmana Sahi Khandapara, Nayagarh, Odisha.
              </p>
              <p>
                - Near Sum Hospital, Bhubaneshwar, Odisha.
              </p>
              <p>
                - Near Asian Aroma, Manikonda Lanco hills, Hyderabad.
              </p>
            </div>
            <div className="flex space-x-3">
              <a href='https://www.instagram.com/n_arkdesignstudio1/?igsh=c2VrNTlkNjl5NWg5' target="_blank">
                <img src={getImageUrl('insta.png')} width={20} height={20} />
              </a>

            </div>

          </motion.div>

          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              id="container-form"
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e55d2639c56971475bdfb82bfbd59ed4"
              method="POST"
            >
              {errors.name && (
                <p className="pb-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="YOUR NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.email && (
                <p className="pb-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="YOUR EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />


              <textarea
                className={inputStyles}
                placeholder="MESSAGE (OPTIONAL)"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "optional" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>


        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
