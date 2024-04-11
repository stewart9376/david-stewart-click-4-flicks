import Lottie from "lottie-react";
import popcorn from "../../assets/animations/Animation - popcorn.json";

const PopcornLoader = () => (
  <Lottie animationData={popcorn} loop={true} style={{ width: 20 + "rem" }} />

  // <p className="popcorn-loader__text">Here Comes your recommended movies...</p>
);
export default PopcornLoader;
