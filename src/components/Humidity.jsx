import { Card } from "flowbite-react";
import humedad from "../assets/images/humedad.jpg";
import { WiNightAltHail } from "react-icons/wi";

function HumidityComponent(props) {
  return (
    <Card
      className="bg-transparent sm:h-[95%] max-sm:h-[90%] max-sm:w-[90%] lg:h-[80%] lg:w-[70%]"
      imgSrc={humedad}
    >
      <WiNightAltHail className="text-white text-5xl max-sm:text-2xl max-sm:justify-center max:ml-10 absolute" />
      <h5 className="max-sm:absolute text-lg font-bold max-sm:text-xs text-white ml-12 max-sm:ml-6 max-sm:text-wrap ">
        Humidity: {props.humidityData}
      </h5>
    </Card>
  );
}

export default HumidityComponent;
