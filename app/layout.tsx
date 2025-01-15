import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Navbar from "./components/Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  }

export default function App() {
    return <>
    <Navbar />
    <Outlet />
    <p className="text-center py-4">Created with ❤️ by <a href="https://www.hithub.com/zxdhiru" className="text-xl font-bold hover:underline">Dhiru</a></p>
    </>;
  }