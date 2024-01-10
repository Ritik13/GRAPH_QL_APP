import { useQuery } from "@apollo/client";
import {  WITH_VAR_POKI_QUERY } from "../Queries/Poki.query";
import { useEffect } from "react";

export default function Pokimon() {
  const { loading, error, data } = useQuery(WITH_VAR_POKI_QUERY , {
    variables : { any: 2 }
  });
  useEffect(() => console.info(data) , [data])
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Error</h1>;
  if (data) return <div>Query Root</div>;
}
