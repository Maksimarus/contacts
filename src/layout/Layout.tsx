import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto bg-gray-900 text-white min-h-screen">
      <div className="container max-w-5xl mx-auto p-5">{children}</div>
    </div>
  );
};

export default Layout;
