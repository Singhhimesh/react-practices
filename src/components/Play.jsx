import { useEffect, useState } from "react";

const Play = ({ showBtn }) => {
  useEffect(() => {
    console.log(`Will render when show btn value change ${showBtn}`);

    return () => {
      console.log("losse");
    };
  }, [showBtn]);
  return <>{showBtn && <button className="btn btn-primary">Test</button>}</>;
};

export default Play;
