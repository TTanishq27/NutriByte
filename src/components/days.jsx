import { motion } from "framer-motion";
import { useState } from "react";
import Test from "./test";

const tabs = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

const days = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="flex items-center flex-col gap-4">
        <div className="p-4 bg-[#12372a] rounded-lg flex items-center justify-center gap-2">
          {tabs.map((tab) => (
            <Chip
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              key={tab}
            />
          ))}
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
            {selected === "Day 1" ? <div>
              <Test />
            </div> : selected === "Day 2" ? <div></div> : <div></div>}
        </div>
    </div>
  );
};

const Chip = ({text, selected, setSelected,}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? ""
          : "hover:bg-[#ffffff30]"
      } text-white text-base px-4 py-1 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 1 }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-green-600 to-green-800 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default days;