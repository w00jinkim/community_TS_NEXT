import "./globals.css";
import { Inter, Advent_Pro } from "next/font/google";
import TopNav from "./TopNav";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { Providers } from "./GlobalRedux/provider";

const inter = Inter({ subsets: ["latin"] });
const advent = Advent_Pro({
  subsets: ["latin"],
  weight: "500",
  variable: "--advent",
});

export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={cls(inter.className, advent.variable)}>
        <Providers>
          <div>
            <TopNav session={session} />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
