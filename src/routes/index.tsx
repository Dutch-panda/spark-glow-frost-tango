import { createFileRoute } from "@tanstack/react-router";
import { TorobApp } from "@/components/torob-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <TorobApp />;
}
