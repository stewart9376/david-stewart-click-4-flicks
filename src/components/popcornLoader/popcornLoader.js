import Lottie from "lottie-react";
import popcorn from "../../assets/animations/Animation - popcorn.json";
import "./popcornLoader.scss";

const PopcornLoader = () => (
  <div className="popcorn-loader">
    <Lottie animationData={popcorn} loop={true} style={{ width: 20 + "rem" }} />
    <p className="popcorn-loader__text">
      Get some popcorn, here comes your recommended movie...
    </p>
  </div>
);
export default PopcornLoader;
