import { useContext } from "react";
import { NavigationContext } from "../Router";

export default function useNavigate() {
  const navigate = useContext(NavigationContext);
  return navigate;
}
