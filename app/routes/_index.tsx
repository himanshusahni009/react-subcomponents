import type { MetaFunction } from "@remix-run/node";
import { Label } from "~/components/MyComponent";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>

      <Label>
        <Label.Title>Patient Name</Label.Title>
        <Label.Value>Test User</Label.Value>
      </Label>
    </div>
  );
}
