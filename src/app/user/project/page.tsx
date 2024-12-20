import UserProjects from "@/components/UserProjects";
import { fetchServer } from "@/utils/fetch";

const add = async () => {
  const { data } = await fetchServer(
    "https://vferdi7.vercel.app/",
    "api/select"
  );

  return (
    <div className="grid md:grid-cols-[repeat(4,minmax(300px,1fr))] sm:grid-cols-2 grid-cols-1 gap-4 p-4">
      <UserProjects data={data}></UserProjects>
    </div>
  );
};

export default add;
