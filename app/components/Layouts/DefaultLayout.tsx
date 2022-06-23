import BottomNav from "components/BottomNav";
import React from "react";
import TitleLayout from "./TitleLayout";

type DefaultLayoutProps = {
  children: React.ReactNode;
  title: string;
  role: "ADMIN" | "USER";
};

const DefaultLayout = ({ children, title, role }: DefaultLayoutProps) => {
  return (
    <div>
      <TitleLayout title={title}>
        <main className="pb-[96px]">{children}</main>
        <BottomNav role={role} />
      </TitleLayout>
    </div>
  );
};

export default DefaultLayout;
