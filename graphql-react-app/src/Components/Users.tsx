import { useQuery } from "@apollo/client";
import { GET_COMPANY, GET_USERS_ALL } from "../Queries/UserQuery";
import { useEffect } from "react";

export default function Users() {
  // let users: any = [];
  const { data, loading, error } = useQuery(GET_USERS_ALL);
  const { data : companyData } = useQuery(GET_COMPANY);

  useEffect(() => console.info(data, companyData), [data, companyData]);
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Error</h1>;
  if (data) return <div>Query Root</div>;
}
