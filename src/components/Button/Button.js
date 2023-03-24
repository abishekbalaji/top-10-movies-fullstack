import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, classes, btnType, disabled, ...otherTypes }) => {
  return (
    <button
      className={`custom-button ${BUTTON_TYPE_CLASSES[btnType]} ${classes}`}
      disabled={disabled}
      {...otherTypes}
    >
      {children}
    </button>
  );
};

export default Button;
