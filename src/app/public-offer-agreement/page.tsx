"use client";
import offerRu from "@/data/PublicOfferRu.json";
import offerEn from "@/data/PublicOfferEng.json";
import offerKz from "@/data/PublicOfferKz.json";
import { useTranslation } from "react-i18next";
import React from "react";

type ListItem =
  | string
  | { type: "ul"; items: ListItem[] }
  | { type: string; items: string[] } 
  | { type: string; text: string };

function isUlItem(item: any): item is { type: "ul"; items: (ListItem | string)[] } {
  return item?.type === "ul" && Array.isArray(item.items);
}

export default function PublicOfferAgreement() {

  const { i18n } = useTranslation();

  // Выбор данных в зависимости от языка
  let offerContent;
  switch (i18n.language) {
    case "en":
      offerContent = offerEn;
      break;
    case "kz":
      offerContent = offerKz;
      break;
    case "ru":
    default:
      offerContent = offerRu;
  }



  function renderList(items: (ListItem | string)[], level = 0) {
    return (
      <ul
        className={`mb-[40px] text-[28px] max-[1440px]:text-[24px] max-[768px]:text-[15px] max-[375px]:text-[12px] ${
          level > 0 ? "mt-2" : ""
        }`}
      >
        {items.map((li, i) => {
          if (typeof li === "string") {
            return <li key={i}>{li}</li>;
          } else if (typeof li === "object") {
            if (isUlItem(li)) {
              return <li key={i}>{renderList(li.items, level + 1)}</li>;
            } else if ("text" in li) {
              return <li key={i}>{li.text}</li>;
            }
          }
          return null;
        })}
      </ul>
    );
  }
  
  return (
    <div className="px-[38px] py-[40px] max-[1440px]:py-[20px] max-[1440px]:px-0 max-[768px]:py-[5px] max-[375px]:py-[10px]">
      {offerContent.map((item, index) => {
        switch (item.type) {
          case "h1":
            return (
              <h1
                key={index}
                className="mb-[70px] font-bold text-[48px] uppercase max-[1440px]:text-[40px] max-[768px]:text-[24px] max-[375px]:text-[14px] max-[375px]:mb-[15px]"
              >
                {item.text}
              </h1>
            );
          case "h2":
            return (
              <h2
                key={index}
                className="mb-[35px] font-bold text-[44px] uppercase max-[1440px]:text-[36px] max-[768px]:text-[18px] max-[768px]:mb-[30px] max-[375px]:text-[13px] max-[375px]:mb-[15px]"
              >
                {item.text}
              </h2>
            );
           case "ul":
            return <React.Fragment key={index}>{renderList(item.items ?? [])}</React.Fragment>;
          case "group":
            return (
              <div key={index} className="mb-4 space-y-1 text-[28px] max-[1440px]:text-[24px] max-[768px]:text-[15px] max-[375px]:text-[12px]">
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
