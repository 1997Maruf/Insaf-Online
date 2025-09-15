import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

const UseRole = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosPublic(`/user/${user?.email}`);
      console.log(data.role);
      return data.role;
    },
  });
  console.log(role);
  return [role, isLoading];
};

export default UseRole;
