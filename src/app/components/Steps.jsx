import React from "react";
import { SingleStep } from "./SingleStep";
import { FaRegClipboard } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";

export const Steps = () => {
  return (
    <div style={{ backgroundColor: "#F7FCFE" }} className="flex flex-col items-center justify-center py-12 text-center">
      <h1 className="text-4xl">איך זה עובד</h1>
      <SingleStep
        title={"ספר לנו מה הבעיה"}
        image={<FaRegClipboard />}
        color={"F3B9ED"}
        subTitle={
          "שלח בקשה עם תיאור של הקושי שלך - בין אם מדובר במכשיר שנפרץ, פעילות חשודה או חשש לאבטחת מידע"
        }
      />
      <SingleStep
        title={"בחר מומחה סייבר"}
        image={<FaRegUser />}
        color={"4DDFFD"}
        subTitle={
          "עיין במומחים מאומתים לפי ניסיון, דירוג ופרופיל אישי. בחר את המתאים לך מבחינת צורך ותקציב"
        }
      />
      <SingleStep
        title={" קבל עזרה ותשאר מוגן"}
        image={<IoLockClosedOutline />}
        color={"9672FF"}
        subTitle={
          "שוחח עם המומחה, פתור את הבעיה, וקבל המלצות איך להישאר בטוח גם בעתיד — הכל דרך הפלטפורמה"
        }
      />
    </div>
  );
};
