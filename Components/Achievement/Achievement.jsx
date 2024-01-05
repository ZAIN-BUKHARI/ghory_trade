import React,{useContext} from "react";
import {ThemeContext} from '../../Context/ThemeContext'
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);




const AchievementsSection = () => {

<<<<<<< HEAD
  const {mobile,users,sell,buy}=useContext(ThemeContext)
=======
  const {mobile,sell,buy}=useContext(ThemeContext)
>>>>>>> origin/main
 
  const achievementsList = [
    {
      metric: "Projects",
      value: "10",
      postfix: "+",
    },
    {
      // postfix: "~",
      metric: "Users",
<<<<<<< HEAD
      value: users,
=======
      value: '722',
>>>>>>> origin/main
    },
    {
      metric: "Buy",
      value: `${buy}$`,
      postfix: "$",
    },
    {
      metric: "Sell",
      value: `${sell}$`,
      postfix: "$",
    },
  ];
  return (
    <div className="ml-[-30px] ">
      <div className="sm:border-[#ffdb1a] goldShadow sm:border rounded-md  py-8  flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center  mx-[115px] my-4 sm:my-0"
            >
              <h2 className="text-[#ffdb1a] text-5xl font-bold  md:flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-[#ffdb1a] text-5xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {mobile?"": achievement.postfix}
              </h2>
              <p className="text-[#ffdb1a] font-bold text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
