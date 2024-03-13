import { Card } from "flowbite-react";
import nigth from "../assets/images/noche.jpg";
import { MdModeNight } from "react-icons/md";

function TempMinComponent(props) {
  return (
    <Card
      className="bg-transparent sm:h-[95%] max-sm:h-[90%] max-sm:w-[90%] lg:h-[80%] lg:w-[70%] "
      imgSrc={nigth}
    >
      <MdModeNight className="text-white absolute text-5xl max-sm:text-2xl max-sm:justify-center max:ml-10 "></MdModeNight>
      <h5 className="text-white text-lg font-bold ml-12 max-sm:absolute max-sm:text-xs max-sm:ml-6">
        TempMin: {props.tempMinData}
      </h5>
    </Card>
  );
}

export default TempMinComponent;
