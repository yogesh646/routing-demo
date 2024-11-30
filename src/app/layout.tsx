// app/layout.tsx or app/layout.js
import "./global.css";
import { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/component">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
export default RootLayout;
