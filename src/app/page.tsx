"use client";
import FileInput from "@/components/atoms/Input/FileInput";
import Table from "@/components/molecules/Table/Table";
import TableLibraryRow from "@/components/molecules/Table/TableLibraryRow";
import PlayingView from "@/components/organisms/PlayingView/PlayingView";
import { useAppState } from "@/contexts/StateContext";

export default function Library() {
  const { state } = useAppState();
  return (
    <>
      <PlayingView />
      <div className="flex flex-col justify-start items-center h-full grow overflow-auto overflow-x-hidden">
        <Table
          title="Title"
          description="Description"
          imgSrc="/images/paint.jpg"
          className="my-5 max-sm:my-0!"
          columns={
            <>
              <th className="w-8 max-sm:hidden">#</th>
              <th className="w-80">Title</th>
              <th className="w-60">Album</th>
              <th className="w-30">Duration</th>
              <th className="w-40">Actions</th>
            </>
          }
          rows={state.allMusics.map((music, index) => (
            <TableLibraryRow
              id={music.id}
              key={music.id}
              duration={music.duration}
              number={index}
              title={music.title}
              album={music.album}
              authors={music.artists}
              imgSrc={music.image}
              selected={index === state.musicIndex}
            />
          ))}
        />
      </div>
      <FileInput />
    </>
  );
}
