import React from "react";
import Acc from "./acc.js";
const Accordion = () => {
  return (
    <div className="accordion">
      <div className="f-1 acc_fre">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <Acc
        titre="What is Bookmark?"
        children="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet"
      />
      <Acc
        titre="How can I request a new browser?"
        children="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet"
      />
      <Acc
        titre="Is there a mobile app?"
        children="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet"
      />
      <Acc
        titre="What about other Chromium browsers?"
        children="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet"
      />
      <button className="btnA">More Info</button>
    </div>
  );
};

export default Accordion;
