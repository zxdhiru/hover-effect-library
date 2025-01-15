import { effects } from "~/components/effects";
import Card from "~/components/Card";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="text-white p-8 pt-16">
      <h1 className="text-4xl font-bold text-center mb-8">Hover Effects</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto p-4">
        {effects.map((effect) => (
          <Card
            key={effect.id}
            effectName={effect.name}
            className={effect.className}
          />
        ))}
      </div>
    </div>
  );
}
