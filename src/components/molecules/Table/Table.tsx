import Button from "@/components/atoms/Button/Button";
import Image from "@/components/atoms/Image/Image";
import { ReactNode } from "react";
import { BiEdit } from "react-icons/bi";
import { LiaPenSolid } from "react-icons/lia";

interface ITableProps {
  title: string;
  description: string;
  imgSrc?: string;
  rows?: ReactNode;
  columns: ReactNode;
  className?: string;
}

export default function Table({
  rows,
  columns,
  className,
  title,
  imgSrc,
  description,
}: ITableProps) {
  return (
    <table
      className={`*:border-1 *:border-dark-400/70 backdrop-blur-xl ${className}`}
    >
      {/* <thead>
        <tr>
          <th colSpan={5}>
            <div className="flex items-start size-full h-45 max-sm:h-20">
              <Image
                className="h-[100%]! border-r-1! border-dark-400! aspect-square"
                customSize
              />
              <div className="flex flex-col justify-between items-start h-full grow! p-5 *:line-clamp-1 *:text-left max-sm:p-2">
                <h1 className="text-5xl text-dark-100 max-sm:text-2xl leading-[1]">
                  {title}
                </h1>
                <h2 className="text-[1rem] text-dark-200 font-medium leading-[1] max-sm:text-[0.7rem]">
                  {description}
                </h2>
                <h3 className="text-[1rem] text-dark-300 italic leading-[1] max-sm:text-[0.7rem]">
                  by _autovi, 12 songs
                </h3>
              </div>
              <Button
                variant="primary"
                className="p-1! m-5 max-sm:p-[2px]! max-sm:m-2"
              >
                <LiaPenSolid className="size-5 max-sm:size-3" />
              </Button>
            </div>
          </th>
        </tr>
      </thead> */}
      <thead>
        <tr
          className={`*:border-b-0 max-sm:**:text-[0.5rem] px-5 *:py-1 text-dark-300 select-none ${className}`}
        >
          {columns}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
