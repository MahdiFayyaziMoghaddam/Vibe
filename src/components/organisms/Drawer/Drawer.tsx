import { Drawer as D } from "antd";
import Logo from "../../molecules/Logo/Logo";
import DrawerItem from "./DrawerItem";
import { RiPlayList2Fill } from "react-icons/ri";
import { MdLibraryMusic } from "react-icons/md";
import DrawerExit from "./DrawerExit";
import CloseButton from "../../atoms/Button/CloseButton";

interface IDrawerProps {
  open: boolean;
  onClose: () => void;
}

function Drawer({ onClose, open }: IDrawerProps) {
  return (
    <D
      open={open}
      closable={true}
      destroyOnClose
      autoFocus={false}
      styles={{
        header: {
          display: "none",
        },
        body: {
          position: "relative",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "stretch",
          padding: "0",
          backgroundColor: "var(--color-dark-800)",
          borderRight: "1px solid var(--color-dark-400)",
          width: "100%",
        },
        wrapper: {
          width: "20rem",
        },
      }}
      onClose={onClose}
      placement="left"
    >
      <CloseButton onClick={onClose} />

      <Logo className="py-4 border-b-dark-400 border-b-1 scale-90 w-full" />

      <div className="flex flex-col px-8 py-5 gap-5 max-h-50">
        <DrawerItem
          href="/"
          icon={<MdLibraryMusic />}
          title="Library"
          onClose={onClose}
        />
        {/* <DrawerItem
          href="/playlists"
          icon={<RiPlayList2Fill />}
          title="Playlists"
          onClose={onClose}
        /> */}
        <DrawerExit />
      </div>
    </D>
  );
}

export default Drawer;
