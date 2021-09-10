import { Button } from "react-bootstrap";
import { buttonProps } from "../../constants";

const index = ({
  id,
  color = buttonProps.default.color,
  text = buttonProps.default.text,
  onClick,
  className,
  name,
  style
}) => {
  return (
    <Button
      variant={color}
      id={id}
      onClick={onClick}
      className={className}
      name={name}
      style={style}
    >
      {text}
    </Button>
  );
};
export default index;
