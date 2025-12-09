import type { Route } from "./+types/cafe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function cafe() {
  return<>
    <div className="pt-16 p-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Cafe Page</h1>
    </div>
    </>;
}
