import { Card } from "flowbite-react";
import tempMaxIcon from "../assets/images/tempMax.png";

function TempMaxComponent(props) {
  return (
    <Card className="bg-transparent max-sm:h-[80%] max-sm:w-[90%] sm:h-[95%] md:h-[60%] lg:h-[60%] lg:w-[70%] border-transparent ">
      <img
        className="lg:w-[70%] lg:ml-10 object-cover"
        src={tempMaxIcon}
        alt="Imagen"
      />
      <h5 className="text-white text-lg font-bold max-sm:text-xs">
        TemMax: {props.tempMaxData} °C
      </h5>
    </Card>
  );
}

export default TempMaxComponent;
