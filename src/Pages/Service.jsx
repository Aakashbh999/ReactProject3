import React, { useEffect } from "react";
import { getPublicData } from "../utils/Query";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../utils/CONSTANTS";

const Service = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [queryKeys.SERVICE],
    queryFn: () => getPublicData(queryKeys.SERVICE),
  });

  console.log(data);

  if (isLoading)
    return (
      <>
        <h1>Loading..</h1>
      </>
    );
  return (
    <>
      <div className="w-full h-full flex flex-wrap gap-6 ">
        {data?.map((items, i) => {
          return (
            <div
              key={i}
              className="p-10 w-[300px] h-[400px] rounded-xl bg-black text-white "
            >
              <h1>{items.provider}</h1>
              <h1>{items.description}</h1>
              <h1>{items.price}</h1>
              <h1>{items.services}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Service;
