import Navbar from "@/components/ui/navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <div className="flex min-h-screen w-full flex-col">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
