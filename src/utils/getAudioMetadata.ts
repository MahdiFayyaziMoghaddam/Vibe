import { IAudioMetadata, parseBlob } from "music-metadata";
import { AudioMetadata } from "../types/AudioMetadata";
import { delay } from "./delay";

interface SetAudioMetadataResponse {
  error?: string | null;
  metadataList?: AudioMetadata[] | null;
}

export default async function getAudioMetadata(
  files: FileList
): Promise<SetAudioMetadataResponse> {
  const metadataList: AudioMetadata[] = [];
  const errorList: string[] = [];
  if (files.length <= 0 || !files) {
    return { error: "No files provided" };
  }
  for (const file of files) {
    try {
      const musicMetadata: IAudioMetadata = await parseBlob(file);
      console.log(musicMetadata, file);
      const musicURL: string = URL.createObjectURL(file);
      let musicImgURL: string = "";

      if (musicMetadata.common?.picture && musicMetadata.common.picture[0]) {
        const musicImg = musicMetadata.common.picture[0];
        const musicImgBlob = new Blob([musicImg.data as BlobPart], {
          type: musicImg.format,
        });
        musicImgURL = URL.createObjectURL(musicImgBlob);
      }

      const AudioMetadata: AudioMetadata = {
        id: Math.floor(Math.random() * 1000000),
        title:
          musicMetadata.common?.title ||
          file.name.split(".").slice(0, -1).join(".") ||
          "Unknown Title",
        artists: musicMetadata.common?.artists?.join(",") || "Unknown Artist",
        album: musicMetadata.common?.album || "Unknown Album",
        duration: musicMetadata.format.duration || 0,
        image: musicImgURL,
        url: musicURL,
        size:
          file.size / 1024 > 1024
            ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
            : `${(file.size / 1024).toFixed(2)} KB`,
      };
      metadataList.push(AudioMetadata);
    } catch (err: any) {
      errorList.push(`Error in parsing ${file.name}: ${err.message}`);
    }
  }
  await delay(1000);
  if (metadataList.length > 0) {
    return { metadataList };
  } else {
    return { error: errorList.join(", ") || "Failed to load files" };
  }
}
