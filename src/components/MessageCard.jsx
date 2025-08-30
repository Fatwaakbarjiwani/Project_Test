import PropTypes from "prop-types";
export default function MessageCard({ item }) {
  return (
    <div className="gap-4 rounded shadow-md border border-gray-200 py-8 sm:py-16 px-8 space-y-4 bg-white relative z-30">
      <p>&quot;{item.quote}&quot;</p>
      <div className="flex items-center gap-4">
        <img src={item.avatar} className="w-1/4" alt={item.name} />
        <div className="w-1/2">
          <h1 className="text-primary font-[500]">{item.name}</h1>
          <p className="text-neutral-500">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

MessageCard.propTypes = {
  item: PropTypes.object.isRequired,
};
