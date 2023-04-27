import { Outlet } from "react-router-dom";
export function loader() {
  const contacts = { tom: "ee" };
  return { contacts };
}
export default function Root() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
