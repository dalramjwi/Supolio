import { MainDataStructure } from "../class/class.ts";
import dataJson from "../../../data/data.json";
//todo 데이터 json으로 빼기
export const MainInstance = MainDataStructure.fromJson(dataJson);
