import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";


import { logo1 , PropIt} from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={PropIt} alt="Refine" width="28px" />
        ) : (
          <img src={logo1} alt="Refine" width="140px" />
        )}
      </Link>
    </Button>
  );
};
