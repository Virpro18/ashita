import readJson from "./readJson";
import { ProjectData_SubData, UserType } from "@/types/database";

interface User {
  id: string;
  name: string;
  password: string;
}

const search = (database: string) => {
  const { datas } = readJson(database);

  const id = (query: string) => 
    datas.find((item: ProjectData_SubData | UserType) => 
      item.id.includes(query)
    );

  const title = (query: string) => 
    datas.find((item: ProjectData_SubData) => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );

  const user = (query: User): User | undefined => 
    datas.find((item: UserType) => 
      item.name.toLowerCase().includes(query.name.toLowerCase()) &&
      item.password.includes(query.password)
    );

  const findDataByKey = (
    query: string, 
    key: keyof ProjectData_SubData
  ): ProjectData_SubData[] | undefined => {
    if (!query) {
      console.error("Query is empty or undefined");
      return undefined;
    }

    const filteredData = datas.filter((item: ProjectData_SubData) => {
      const value = item[key];
      if (typeof value === "string") {
        return value === query;
      }
      return false;
    });

    if (filteredData.length === 0) {
      console.warn(`No data found for query: "${query}" and key: "${key}"`);
      return undefined;
    }

    return filteredData;
  };

  const all = () => datas;

  return { id, title, user, findDataByKey, all };
};

export default search;
