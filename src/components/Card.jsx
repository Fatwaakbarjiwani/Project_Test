import PropTypes from "prop-types";
import bedWhite from "../assets/badWhite.svg";
import bed from "../assets/bad.svg";
import person from "../assets/person.svg";
import personWhite from "../assets/personWhite.svg";

export default function Card({ item }) {
  const formatNumber = (number) => {
    return number.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };
  return (
    <div
      className={`w-full h-full font-[500] border shadow sm:rounded-md p-2 sm:p-4 space-y-4 ${
        item.id % 2 === 0
          ? "border-primary bg-primary text-white"
          : "border-gray-200 text-primary"
      }`}
    >
      <img src={item.image} className="rounded-md" alt={item.name} />
      <h1 className="text-base whitespace-nowrap">{item.name}</h1>
      <div
        className={`hidden text-xs sm:flex gap-8 justify-between items-start font-light ${
          item.id % 2 === 0 ? "text-white" : "text-neutral-700"
        }`}
      >
        <p className="whitespace-nowrap w-1/3">main facilities</p>
        <p className="w-7/12">{item.facility}</p>
      </div>
      <div
        className={`hidden sm:flex justify-between font-normal items-center ${
          item.id % 2 === 0 ? "text-white" : "text-neutral-700"
        }`}
      >
        <div className="flex items-center gap-2 w-1/3">
          {item?.id % 2 === 0 ? (
            <img src={bedWhite} alt="" />
          ) : (
            <img src={bed} alt="" />
          )}
          <p className="text-sm">{item.bed} Bed</p>
        </div>
        <div className="flex items-center gap-2 w-7/12">
          {item?.id % 2 === 0 ? (
            <img src={personWhite} alt="" />
          ) : (
            <img src={person} alt="" />
          )}
          <p className="text-sm">{item.persons} Person</p>
        </div>
      </div>
      <h1>
        {formatNumber(item?.charge)}{" "}
        <span
          className={`hidden sm:block font-light ${
            item.id % 2 === 0 ? "text-white" : "text-neutral-700"
          }`}
        >
          /night
        </span>{" "}
      </h1>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};
