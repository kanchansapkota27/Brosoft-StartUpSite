import React from "react";
import { JourneyCardLeft, JourneyCardRight } from "./subcomponents/JourneyCard";
import { JOURNEY } from "../data/constants";
import { AnimatePresence } from "framer-motion";

const AboutJourney = ({data}) => {
  return (
    <>
      <section class="text-gray-600 body-font dark:bg-gray-700 dark:text-gray-300">
        <div class="container px-10 gap-4 md:px-20 pt-10 pb-20">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-100">
              Know our history
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Learn about our journey since we established.
            </p>
          </div>
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            {
                data?
                data.map((item,index)=>{
                    if (index%2==0){
                        return <JourneyCardLeft key={index} data={item}/>
                    }
                    else{
                        return <JourneyCardRight key={index} data={item}/>
                    }
                })
                :JOURNEY.sort((a,b)=>a.date.getTime()-b.date.getTime()).reverse().map((item,index)=>{
                    if (index%2==0){
                        return <JourneyCardLeft key={index} data={item}/>
                    }
                    else{
                        return <JourneyCardRight key={index} data={item}/>
                    }
                })
            }
        </div>
        </div>
      </section>
    </>
  );
};

export default AboutJourney;
