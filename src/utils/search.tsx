import readJson from "./readJson";
import { ProjectData_SubData, UserType } from "@/types/database";

interface user {
  name: string;
  password: string;
}

const search = (database: string) => {
  const { data } = readJson(database);

  const id = (query: string) => 
    data.find((item: ProjectData_SubData | UserType) => item.id.includes(query));

  const title = (query: string) => 
    data.find((item: ProjectData_SubData) => item.title.toLowerCase().includes(query.toLowerCase()));

  const user = (query: user):user => 
    data.find(
      (item: UserType) =>
        item.name.toLowerCase().includes(query.name.toLowerCase()) &&
        item.password.includes(query.password)
    );

  const all = () => data;

  return { id, title, user, all };
};

export default search;
