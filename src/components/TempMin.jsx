import { Card } from "flowbite-react";
import tempMinIcon from "../assets/images/tempMin.png";

function TempMinComponent(props) {
  return (
    <Card className="bg-transparent max-sm:h-[80%] max-sm:w-[90%] sm:h-[95%] md:h-[60%] lg:h-[60%] lg:w-[70%] border-transparent">
      <img
        className="lg:w-[70%] lg:ml-10 object-cover"
        src={tempMinIcon}
        alt="Imagen"
      />
      <p className="text-white text-lg font-bold max-sm:text-xs">
        TemMin: {props.tempMinData} °C
      </p>
    </Card>
  );
}

export default TempMinComponent;
