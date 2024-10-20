import { MainDataStructure } from "../class/class.ts";
import dataJson from "../../../data/data.json";
export const MainInstance = MainDataStructure.fromJson(dataJson);
