import { useEffect } from "react";
import { useLocation } from "react-router";

const Render = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.location.reload(true);
  }, [location]);

  return <>{props.children}</>
};

export default Render;