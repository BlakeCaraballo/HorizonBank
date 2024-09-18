import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/ui/MobileNav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Blake', lastName: 'Caraballo'};


  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src='/icons/logo.svg' alt="logo" width={30} height={30}/>
            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>
          {children}
        </div>
        
    </main>
  );
}
