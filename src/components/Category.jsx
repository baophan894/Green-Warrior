import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import "../styles/enviroment.css";

const Category = () => {
  const categories = [
    {
      id: 1,
      title: "Creating Content",
      description:
        "You can make a video or create a post about the challenge topic of every day",
      image: "https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/home/services-and-solutions/webp-image-841.webp?extension=webp&modified=20240523073602",
    },
    {
      id: 2,
      title: "Exploring AI",
      description:
        "Discover the latest advancements in AI technology and how they can be applied to your business",
      image: "https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/home/services-and-solutions/webp-image-840.webp?extension=webp&modified=20240523073602",
    },
    {
      id: 3,
      title: "Innovating Solutions",
      description:
        "Leverage AI and innovative technologies to create cutting-edge solutions for your challenges",
      image: "/src/assets/icons/process-two-icon3.png",
    },
    {
      id: 2,
      title: "Exploring AI",
      description:
        "Discover the latest advancements in AI technology and how they can be applied to your business",
      image: "https://png.pngtree.com/background/20230525/original/pngtree-the-globe-with-lines-of-connection-is-shown-picture-image_2728782.jpg",
    },
   
    // Add more category objects as needed
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Harness Continuous{" "}
          <span className="gradient-ramp">Innovation &amp; AI</span>
        </h2>
        <p className="text-neutralGrey">
          In all of FPT Software's comprehensive service and solutions, AI is
          embedded as an accelerator to enable new levels of performance for
          clients and enhance efficiency in our own operations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {categories.map((category) => (
          <div className="card mx-auto" key={category.id}>
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <h3>{category.title}</h3>
                  <img
                    src={category.image}
                    alt="Robotic arm"
                  />
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle"></div>
                  <div className="circle" id="right"></div>
                  <div className="circle" id="bottom"></div>
                </div>
                <div className="front-content">
                  <small className="badge">{category.title}</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>{category.title}</strong>
                      </p>
                      <svg
                        fillRule="nonzero"
                        height="15px"
                        width="15px"
                        viewBox="0,0,256,256"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          style={{ mixBlendMode: "normal" }}
                          textAnchor="none"
                          fontSize="none"
                          fontWeight="none"
                          fontFamily="none"
                          strokeDashoffset={0}
                          strokeDasharray
                          strokeMiterlimit={10}
                          strokeLinejoin="miter"
                          strokeLinecap="butt"
                          strokeWidth={1}
                          stroke="none"
                          fillRule="nonzero"
                          fill="#20c997"
                        >
                          <g transform="scale(8,8)">
                            <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className="card-footer">{category.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;