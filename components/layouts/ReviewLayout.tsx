import React from "react";
import { LayoutProps } from "../../lib/types";

const ReviewLayout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <React.Fragment>
      <section>
        <h1 className="font-bold text-3xl mb-2">{title} Application</h1>
        <div className="flex items-center space-x-3">
          <p className="text-s">Submitted by:</p>
          <h3 className="font-bold text-xl">Juan Dela Cruz</h3>
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-s">Employee ID:</p>
          <h3 className="font-bold text-xl">xxxxxxxxxxx</h3>
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-s text-grey-300">Dev ops</p>
          <span className="text-grey-300"> &bull; </span>
          <p className="text-s text-grey-300">Developer</p>
        </div>
      </section>
      <section>{children}</section>
    </React.Fragment>
  );
};

export default ReviewLayout;
