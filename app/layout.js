import { DM_Sans } from "next/font/google";
import "./globals.css";
import Layoutextended from "./layoutextended";
import DevMode from "./DevMode/DevMode";


const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
    title: 'Beyond Oceans'
}

export default function RootLayout({ children }) {
    //To activate site change from DEV to PROD
    const mode = "DEV"
  return (
    <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
            <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
        </head>
        <body className={DMSans.className}>
            {
                mode === "DEV" ?
                <DevMode /> : ""
            }
            {
                mode === "PROD" ?
                <Layoutextended>{children}</Layoutextended> : ""
            }
        </body>
    </html>
  );
}
