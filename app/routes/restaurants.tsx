import type { Route } from "./+types/restaurants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "restaurants" },
    { name: "description", content: "A list of great restaurants!" },
  ];
}

export default function restaurants() {
  // Replace this with your actual restaurants list component
  return <div>List of restaurants will be here.</div>;
}
