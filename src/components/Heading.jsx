import PropType from "prop-types";
const Heading = ({ cardHeading }) => {
  return (
    <div className="text-center">
      <h3 className="text-[40px] font-bold mt-12 md:mt-24">{cardHeading}</h3>
    </div>
  );
};
Heading.propTypes = {
  cardHeading: PropType.string,
};
export default Heading;
