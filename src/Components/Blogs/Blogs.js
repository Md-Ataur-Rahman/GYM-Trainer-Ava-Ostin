import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section id="questions-section">
      <div class="question-div">
        <h3 class="quenstion-name">
          Difference between authorization and authentication ?
        </h3>
        <p class="answer-of-question">
          Authentication: Authentication verifies who the user is.Authentication
          ব্যবহারকারীর দ্বারা দৃশ্যমান এবং আংশিকভাবে পরিবর্তন করা যায় ।
          Authentication Methods মধ্যে একটা হলো password, pin |
          <br />
          Authorization: Authorization determines what resources a user can
          access.Authorization সে কি এটার এক্সেস চাই কিনা সেটা verify করতে পারে
          Surely | Authorization always takes place after authentication.
          Authorization isn't visible to or changeable by the user.
        </p>
      </div>
      <div class="question-div">
        <h3 class="quenstion-name">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p class="answer-of-question">
          We are using firebase becuase firebase মাধ্যমে বিভিন্ন ধরণের
          Authentication system দিয়ে আমরা আমাদের বিভিন্ন Application করেতে পারি
          |
          <br />
          Best Open Source Firebase Alternatives : Back4App, AWS Amplify,
          Kuzzle,Couchbase, NativeScript, RxDB, Flutter etc
        </p>
      </div>
      <div class="question-div">
        <h3 class="quenstion-name">
          What other services does firebase provide other than authentication ?
        </h3>
        <p class="answer-of-question">
          Firebase মাধ্যমে আমরা যে যে কাজ করতে পারি authentication ছাড়া Emulator
          suite, Realtime databse, cloud firestore storage, Machine larning,
          Hosting, Cloud function. এই এই জিনিস গুলো আমরা realtime কাজে লাগাতে
          পারি |
        </p>
      </div>
    </section>
  );
};

export default Blogs;
