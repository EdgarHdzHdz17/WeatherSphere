import { Card } from "flowbite-react";
import day from "../assets/images/dia.jpg";
import { WiDayCloudy } from "react-icons/wi";

function TempMaxComponent(props) {
  return (
    <Card
      className="bg-transparent sm:h-[95%] max-sm:h-[90%] max-sm:w-[90%] lg:h-[80%] lg:w-[70%]"
      imgSrc={day}
    >
      <WiDayCloudy className="text-white text-5xl max-sm:text-2xl max-sm:justify-center max:ml-10 absolute" />
      <h5 className="max-sm:absolute text-lg font-bold max-sm:text-xs text-white ml-12 max-sm:ml-6 ">
        TempMax: {props.tempMaxData}
      </h5>
    </Card>
  );
}

export default TempMaxComponent;
