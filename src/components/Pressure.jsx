import { Card } from "flowbite-react";
import pressureIcon from "../assets/images/pressure.png";

function PressureComponent(props) {
  return (
    <Card className="bg-transparent max-sm:h-[80%] max-sm:w-[90%] sm:h-[95%] md:h-[60%] lg:h-[60%] lg:w-[70%] border-transparent ">
      <img
        className="lg:w-[70%] lg:ml-10 object-cover"
        src={pressureIcon}
        alt="Imagen"
      />
      <h5 className="text-white text-lg font-bold max-sm:text-xs">
        Pressure: {props.pressureData} mb
      </h5>
    </Card>
  );
}

export default PressureComponent;
