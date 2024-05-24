"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgresssBarProvider = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#00ADE4"
        // color="#475569"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {/* <div className="z-[9999] w-[500px] h-24 bg-red-500"></div> */}
    </>
  );
};

export default ProgresssBarProvider;
