import { data } from "../types/database";
import EachUtils from "@/utils/eachUtils";

interface CardsProps {
  data: data[];
}

async function Cards({ data }: CardsProps) {
  return (
    <div>
      <EachUtils
        of={data}
        render={(item) => (
          <div>
            <h1>{item.name}</h1>
            <p>{item.id}</p>
          </div> 
        )}
      />
    </div>
  );
}

export default Cards;
