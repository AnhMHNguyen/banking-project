"use client";

import React from "react";
import CountUp from "react-countup";

function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp end={amount} prefix="$" decimals={2} />
    </div>
  );
}

export default AnimatedCounter;
