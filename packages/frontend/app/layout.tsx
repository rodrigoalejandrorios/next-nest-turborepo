import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "./components/shared/ThemeRegistry";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const metadata: Metadata = {
  title: "Conexa App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
        </Provider>
      </body>
    </html>
  );
}
