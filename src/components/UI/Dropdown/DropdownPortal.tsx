import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};

const DropdownPortal = (props: Props): React.ReactElement => {
  const { children } = props;
  return createPortal(children, document.body);
};

export default DropdownPortal;
