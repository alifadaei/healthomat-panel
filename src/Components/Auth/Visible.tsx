import React from "react";
import { useAppSelector } from "../../hooks/useSelector";
import { UserRole } from "../Auth/authSlice";
const Visible = ({
  roles,
  children,
}: {
  roles: UserRole[];
  children: React.ReactElement;
}) => {
  const role = useAppSelector((state) => state.auth.role);
  const rolesMatch = roles.some((r) => role === r);
  return Boolean(rolesMatch) && children;
};
export default Visible;
