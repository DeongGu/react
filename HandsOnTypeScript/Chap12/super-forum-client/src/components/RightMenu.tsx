import { useWindowDimensions } from "../hooks/useWindowDimensions";

function RightMenu() {
  const { width } = useWindowDimensions();

  if (width <= 768) {
    return null;
  }

  return <div className="rightmenu">RightMenu</div>;
}

export default RightMenu;
