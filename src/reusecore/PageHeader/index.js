import React from "react";

import Particle from "reusecore/Particle";
import PageHeaderWrapper from "./pageHeader.style";

const PageHeader = ({ categories, title, author, areaName }) => {
  return (
    <PageHeaderWrapper>
      <Particle />
      <div className="page-header">
        <h1>{title}</h1>
        {categories && (
          <div className="breadcrumbs post">
            <h4>In:</h4>
            {categories.map((category, index) => (
              <span key={index}> {category} </span>
            ))}
            {author && (
              <>
                <h4>By:</h4> <span>{author.name}</span>
              </>
            )}
          </div>
        )}
        {!categories && title && (
          <div className="breadcrumbs page">
            <>
              <span> Location </span> <span> > </span> {areaName}
            </>
          </div>
        )}
      </div>
    </PageHeaderWrapper>
  );
};
export default PageHeader;
