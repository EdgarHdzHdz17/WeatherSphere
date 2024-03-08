import { Card } from "flowbite-react";
import varometro from "../assets/images/pressure.jpg";
import { FaThermometerFull } from "react-icons/fa";

function PressureComponent(props) {
  return (
    <Card
      className="max-w-sm bg-transoarent lg:h-[78%] lg:w-[70%] sm:h-[95%] max-sm:h-[90%] max-sm:w-[90%] max-sm:justify-center"
      imgSrc={varometro}
    >
      <FaThermometerFull className="text-white text-5xl max-sm:text-2xl  max-sm:justify-center max:ml-10 absolute" />
      <h5 className="max-sm:absolute text-lg font-bold max-sm:text-xs text-white ml-12 max-sm:ml-6">
        Pressure: {props.pressureData}
      </h5>
    </Card>
  );
}

export default PressureComponent;