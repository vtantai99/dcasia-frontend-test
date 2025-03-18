import { PropsWithChildren } from "preact/compat";
import logo from "@/assets/images/logo.png";

export function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center">
      <main>{children}</main>
      <img className="w-[82px] h-[44px] fixed bottom-8 right-8" src={logo} alt="logo" />
    </div>
  );
}
