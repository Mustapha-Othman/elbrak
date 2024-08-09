"use client";
import { useApi } from "@/libs/hooks/global";
import { notFound } from "next/navigation";

const StudieContent = ({ params }) => {
  const query = {
    method: "GET",
    path: `drasat-aljdwies/${params.id[0]}`,
    query: {
      populate: "*",
    },
  };

  const { data, error, isLoading } = useApi(query);

  if (isLoading) return <div>Loading...</div>;

  if (error) return notFound();

  if (data?.data) {
    return (
      <div>
        {data?.data.id} - {data.data.attributes.title}
      </div>
    );
  }
};

export default StudieContent;
