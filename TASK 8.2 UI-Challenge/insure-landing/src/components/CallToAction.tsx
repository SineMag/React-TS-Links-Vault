
import React from "react";
function CallToAction() {
  return (
    <section className="action">
      <div className="container action__content">
        <h2 className="heading">Find out more about how we work</h2>
        <a href="#" className="cta cta--action">How we work</a>
      </div>
      <img
        src="/images/bg-pattern-how-we-work-desktop.svg"
        alt=""
        className="action__bg"
      />
    </section>
  );
}

export default CallToAction;
