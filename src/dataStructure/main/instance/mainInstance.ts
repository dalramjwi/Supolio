import { MainDataStructure } from "../class/mainDataStructure.ts";
import dataJson from "../../../data/data.json";
export const MainInstance = MainDataStructure.fromJson(dataJson);
