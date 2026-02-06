import { PricingTable } from "@clerk/nextjs";
import React from "react";

const Subscription = () => {
  return (
    <div>
      <PricingTable
        appearance={{
          variables: {
            colorPrimary: "#FE5933",
          },
        }}
      />
    </div>
  );
};

export default Subscription;
