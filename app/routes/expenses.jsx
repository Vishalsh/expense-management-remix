import { Outlet } from "@remix-run/react";

export default function ExpensesLayout() {
  return (
    <main>
      <p>Shared Layout!!</p>
      <Outlet />
    </main>
  );
}
