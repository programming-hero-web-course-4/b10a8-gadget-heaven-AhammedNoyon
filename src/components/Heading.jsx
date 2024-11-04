import PropType from "prop-types";
const Heading = ({ cardHeading }) => {
  return (
    <div className="text-center mt-[450px]">
      <h3 className="text-[40px] font-bold ">{cardHeading}</h3>
    </div>
  );
};
Heading.propTypes = {
  cardHeading: PropType.string,
};
export default Heading;
