import { Suspense } from "react";
import { data } from "../types/database";
import EachUtils from "@/utils/EachUtils";

interface CardsProps {
  data: data[];
}

function Cards({ data }: CardsProps) {
  return (
    <div>
      {data.length <= 0 ? (
        <h1>No Data</h1>
      ) : (
        <Suspense fallback={<p>Loading items...</p>}>
          <EachUtils
            of={data}
            render={(item) => (
              <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.id}</p>
              </div>
            )}
            onError={() => <h1>Error loading item</h1>}
          />
        </Suspense>
      )}
    </div>
  );
}

export default Cards;
