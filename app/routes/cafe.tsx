import type { Route } from "./+types/cafe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function cafe() {
    return <>Welcome to the Cafe Page</>;
}
