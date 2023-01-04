import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWord, fetchRandom } from "./dataFetching";
export default function Words(props) {

  const { data, isLoading, isError } = useQuery(["word", props.word], () =>
    fetchRandom()
  );

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (isError) {
    return <span>ERROR</span>;
  }
  return (
    <>
      <div>Word: {data?.word}</div>
      <div>Pronunciation: "{data?.pronunciation?.all}"</div>
      {data?.results?.map((res) => (
        <div key={res.definition}>Definition: {res.definition}</div>
      ))}
    </>
  );
}
