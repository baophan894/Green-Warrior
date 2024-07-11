import React from "react";
import aboutImg from "../assets/about.png";
import aboutImg2 from "../assets/mobile-login.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";


const About = () => {
  return (
    <div>
        {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          >
            <img src={aboutImg} alt="" className="w-full"/>
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              We are the ones who will develop a community to make our world green and cleaner
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              We create different challenges every week on the topic of enviromental protection. Everyone will participate in creating content for that challange and vote for each other to find the best one. Thereby encouraging everyone to join hands to protect the enviroment.
            </p>
            <button className="btn-primary">Join us now !</button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
            Bring people <br /> <span className="text-brandPrimary">closer than ever</span>
            </h2>
            <p>We from a wonderful community</p>
            </div>

            {/* stats */}
            <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/group.png" alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                        <p>Members</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/clubs.png" alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">46,328</h4>
                        <p>Enviromental Clubs</p>
                    </div>
                </div>
                </div>
                <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/click.png" alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">828,867</h4>
                        <p>Volunteer Activities</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src="/src/assets/icons/payments.png" alt="" />
                    <div>
                        <h4 className="text-2xl text-neutralDGrey font-semibold">1,926,436</h4>
                        <p>Waste Has Been Recycled</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </motion.div>

    </div>
  );
};

export default About;
