import { useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";

const cssOverride = {
  margin: "auto",
  zIndex: 1000,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const Spinner = ({ isSpin = false }) => {
  useEffect(() => {
    if (isSpin) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [isSpin]);
  return (
    isSpin && (
      <div sclassname="spinner-overlay ">
        <DotLoader
          color={"skyblue"}
          loading={isSpin}
          cssOverride={cssOverride}
          size={120}
        />
      </div>
    )
  );
};

export default Spinner;
