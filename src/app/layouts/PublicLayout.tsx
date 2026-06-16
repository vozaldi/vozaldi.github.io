import { Outlet } from "react-router";
import BaseLayout from "./BaseLayout";

export default function PublicLayout() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}
