import React from "react";
import { hydrateRoot } from "react-dom/client"; // For React 18+
import RootLayout from "./layout"; // Adjust path to your layout

const container = document.getElementById("root");

if (container) {
  hydrateRoot(container, <RootLayout children={children} />);
}