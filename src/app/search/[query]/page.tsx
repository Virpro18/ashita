import Cards from "@/components/Cards";
import { fetchServer } from "@/utils/fetch";

const search = async ({ params }: { params: Promise<{ query: string }> }) => {
  const query = (await params).query;
  const { data } = await fetchServer(
    "https://vferdi7.vercel.app/",
    `api/select?q=${query}`
  );

  return (
    <>
      <div className="w-full p-2">
        <h3 className="font-bold text-2xl text-color-secondary">
          Search Results
        </h3>
      </div>
      <Cards data={data} />
    </>
  );
};

export default search;
