import { Card } from "flowbite-react";

function CardDataComponent(props) {
  return (
    <>
      <Card className="w-[60%] h-[60%] bg-transparent max-sm:h-[70%] sm:h-[80%] md:h-[60%] border-transparent">
        <h5 className="text-2xl font-bold tracking-tight text-white max-sm:text-md text-center">
          {props.nameData}
        </h5>
        <p className="font-normal text-white max-sm:text-sm">
          Description: {props.descriptionData}
        </p>
        <p className="font-normal text-white max-sm:text-sm">
          Coordinates: Lat {props.latData} , Lon {props.lonData}
        </p>
      </Card>
    </>
  );
}

export default CardDataComponent;
