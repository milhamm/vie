import BottomNav from "components/BottomNav";
import React from "react";
import TitleLayout from "./TitleLayout";

type DefaultLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const DefaultLayout = ({ children, title }: DefaultLayoutProps) => {
  return (
    <div>
      <TitleLayout title={title}>
        <main className="pb-[96px]">{children}</main>
        <BottomNav />
      </TitleLayout>
    </div>
  );
};

export default DefaultLayout;
