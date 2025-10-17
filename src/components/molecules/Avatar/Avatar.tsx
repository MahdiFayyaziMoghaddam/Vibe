import { Avatar as A, Divider, Dropdown, Select, Space } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import Button from "../../atoms/Button/Button";
import { TbLogin } from "react-icons/tb";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Menu, { type IMenuItem } from "../../atoms/Menu/Menu";
import { ReactNode } from "react";

interface IAvatarProps {
  size?: number;
  src?: string;
}

export default function Avatar({ size = 40, src }: IAvatarProps) {
  const menuItems: IMenuItem[] = [
    { title: "Panel", href: "/panel" },
    { title: "Playlists" },
    { title: "Library", href: "/library" },
    { title: "Login", icon: <TbLogin />, href: "/login" },
  ];
  return (
    <>
      <Menu items={menuItems} className="mt-1 mr-6 ">
        <Button
          variant="dark"
          className="p-0! rounded-full! border-primary active:opacity-100! max-sm:size-7"
        >
          <A
            size={size}
            icon={<AiOutlineUser />}
            style={{
              background: "transparent",
              color: "var(--color-dark-200)",
              fontSize: `${(+size / 9) * 5.5}px`,
              cursor: "pointer",
            }}
            src={src}
          />
        </Button>
      </Menu>
    </>
  );
}
