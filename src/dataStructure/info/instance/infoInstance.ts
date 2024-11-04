import { InfoDataStructure } from "../class/infoDataStructure.ts";
import dataJson from "../../../data/data.json";
export const InfoInstance = InfoDataStructure.fromJson(dataJson);
