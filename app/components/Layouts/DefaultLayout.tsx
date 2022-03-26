import BottomNav from "components/BottomNav";
import React from "react";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <main>{children}</main>
      <BottomNav />
    </div>
  );
};

export default DefaultLayout;
