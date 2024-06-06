import axios from "axios";
import { DataType } from "./placeholder";

const BASE_URL = "https://api-us.exoticca.com/api/landing/v2/country/botswana";

export async function getData(): Promise<DataType> {
  const { data } = await axios.get(BASE_URL);

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
