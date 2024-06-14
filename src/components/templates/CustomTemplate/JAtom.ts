import { atom } from "jotai";

export interface CustomState {
  image: string;
  story: string;
  taste: string;
  name: string;
}

export interface GPTState {
  text: string;
  image: string;
}

export const customAtom = atom<CustomState>({
  image: "",
  story: "",
  taste: "",
  name: "Untitle",
});

export const gptImageAtom = atom<GPTState>({
  text: "",
  image: "",
});

export const gptImageFileAtom = atom<File | null>(null);
