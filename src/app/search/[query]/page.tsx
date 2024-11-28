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
      <h1>Search Results</h1>
        <Cards data={data} />
    </>
  );
};

export default search;
