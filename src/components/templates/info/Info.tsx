import React from "react";
import InfoContent from "../../organisms/info/base/InfoContent.tsx";
import InfoLaptop from "../../appearance/views/InfoLaptop.tsx";
import SSideNavLink from "../../molecules/home/styled/SSideNavLink.tsx";

const Info: React.FC = () => {
  return (
    <>
      {/* <InfoContent /> */}
      <InfoLaptop />
      <SSideNavLink />
    </>
  );
};

export default Info;
