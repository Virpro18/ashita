import Cards from "../components/Cards";
import { fetchServer } from "../utils/fetch";
export default async function Home() {
  const { data } = await fetchServer(
    "https://vferdi7.vercel.app/",
    "api/select"
  );
  // console.log(data);
  return (
    <>
      <h1 className="font-bold text-2xl font-sans text-center text-color-tertiary">
        Projects
      </h1>
      <div className="grid md:grid-cols-[repeat(4,minmax(300px,1fr))] sm:grid-cols-2 grid-cols-1 gap-4 p-4">
      <Cards data={data} />
      </div>
    </>
  );
}
