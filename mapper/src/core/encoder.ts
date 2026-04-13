import { deflate } from "pako";
import { Buffer } from "buffer";
import Blueprint from "../models/blueprint";
import BlueprintBook from "../models/blueprint_book";

export const Encoder = (blueprint: Blueprint | BlueprintBook): string => {
  const json = blueprint instanceof Blueprint ? JSON.stringify({ blueprint }) : JSON.stringify(blueprint);
  const result = json.replace(/(null)|(,null)/g, "").replace(/(\[,)/g, "[");
  const encoded = deflate(result, { level: 9 });
  const based = Buffer.from(encoded).toString("base64");
  return 0 + based;
};
