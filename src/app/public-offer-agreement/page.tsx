"use client";
import offerContent from "@/data/public-offer.json";

import React from "react";

export default function PublicOfferAgreement() {
  return (
    <div className="px-[38px] py-[40px] max-[1440px]:py-[20px] max-[1440px]:px-0 max-[768px]:py-[5px] max-[375px]:py-[10px]">
      {offerContent.map((item, index) => {
        switch (item.type) {
          case "h1":
            return (
              <h1
                key={index}
                className="mb-[70px] text-3xl font-bold uppercase"
              >
                {item.text}
              </h1>
            );
          case "h2":
            return (
              <h2
                key={index}
                className="mb-[35px] text-2xl font-bold uppercase"
              >
                {item.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={index} className="mb-[40px]">
                {item.items?.map((li, i) => {
                  if (typeof li === "string") {
                    return <li key={i}>{li}</li>;
                  }
                  return null;
                })}
              </ul>
            );
          case "group":
            return (
              <div key={index} className="mb-4 space-y-1">
                {item.items?.map((subItem, i) => {
                  if (typeof subItem === "object" && "text" in subItem) {
                    return (
                      <span key={i} className="block">
                        {subItem.text}
                      </span>
                    );
                  }
                  return null;
                })}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
