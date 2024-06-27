import PropTypes from "prop-types";

const ActionButton = ({ title, action, disabled, className }) => {
  return (
    <button disabled={disabled} onClick={action} className={className}>
      {title}
    </button>
  );
};

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default ActionButton;
