import React from "react";

interface ContentBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="relative flex min-h-[425px] w-full flex-col rounded-[6px] bg-(--color-dark)"
    >
      {children}
    </div>
  );
};

export default ContentBlock;
