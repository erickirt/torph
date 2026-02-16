import styles from "./styles.module.scss";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { TextMorph } from "torph/react";

const states = [
  {
    label: "Processing Transaction",
    icon: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
        >
          <path
            d="M21.313 11.4062C21.313 16.8775 16.8777 21.3128 11.4065 21.3128"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            opacity="0.1"
            d="M11.4065 21.313C16.8777 21.313 21.313 16.8777 21.313 11.4065C21.313 5.93529 16.8777 1.5 11.4065 1.5C5.93529 1.5 1.5 5.93529 1.5 11.4065C1.5 16.8777 5.93529 21.313 11.4065 21.313Z"
            stroke="currentColor"
            strokeWidth="3"
          />
        </motion.g>
      </svg>
    ),
  },
  {
    label: "Transaction Safe",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.9016 10.4508C20.9016 4.67899 16.2226 0 10.4508 0C4.67899 0 0 4.67899 0 10.4508C0 16.2226 4.67899 20.9016 10.4508 20.9016C16.2226 20.9016 20.9016 16.2226 20.9016 10.4508Z"
          fill="currentColor"
        />
        <path
          d="M6.09631 10.9828L8.83539 13.6439L14.8053 7.83789"
          fill="currentColor"
        />
        <path
          d="M6.09631 10.9828L8.83539 13.6439L14.8053 7.83789"
          stroke="black"
          strokeOpacity="0.85"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const transition = {
  type: "spring" as const,
  mass: 4,
  stiffness: 800,
  damping: 80,
  restDelta: 0.0001,
};
const cssTransition =
  "linear(0 0%, 0.00935 1%, 0.034933 2%, 0.073343 3%, 0.121559 4%, 0.176933 5%, 0.237164 6%, 0.300282 7%, 0.364621 8%, 0.428795 9%, 0.491674 10%, 0.552354 11%, 0.610135 12%, 0.664498 13%, 0.715078 14%, 0.761645 15%, 0.804085 16%, 0.842377 17%, 0.87658 18%, 0.906817 19%, 0.933259 20%, 0.956116 21%, 0.975624 22%, 0.992037 23%, 1.005618 24%, 1.016636 25%, 1.025356 26%, 1.032036 27%, 1.036926 28%, 1.040261 29%, 1.042263 30%, 1.043137 31%, 1.043072 32%, 1.04224 33%, 1.040793 34%, 1.038871 35%, 1.036594 36%, 1.034067 37%, 1.031382 38%, 1.028616 39%, 1.025833 40%, 1.023087 41%, 1.020422 42%, 1.017869 43%, 1.015456 44%, 1.013201 45%, 1.011116 46%, 1.009207 47%, 1.007478 48%, 1.005927 49%, 1.00455 50%, 1.00334 51%, 1.002289 52%, 1.001387 53%, 1.000624 54%, 0.999987 55%)";

export const ExampleAction = () => {
  const [currentStateIndex, setCurrentStateIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStateIndex((prevIndex) => (prevIndex + 1) % states.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.action}>
      <div className={styles.iconWrapper}>
        <AnimatePresence>
          <motion.div
            key={currentStateIndex}
            className={styles.icon}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.6,
              transition: transition,
            }}
            transition={{
              delay: 0.1,
              ...transition,
            }}
          >
            {states[currentStateIndex].icon}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.label}>
        <TextMorph duration={600} ease={`cubic-bezier(0.41, 1.03, 0.6, 1.03)`}>
          {states[currentStateIndex].label}
        </TextMorph>
      </div>
    </div>
  );
};
