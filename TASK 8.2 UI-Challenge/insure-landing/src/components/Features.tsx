import React from "react";
function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2 className="features__heading horizontal horizontal--features">
            <hr />
          We're different
        </h2>
        <ul className="features__list">
          <li>
            <img src="/images/icon-snappy-process.svg" alt="" />
            <h2>Snappy Process</h2>
            <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
          </li>
          <li>
            <img src="/images/icon-affordable-prices.svg" alt="" />
            <h2>Affordable Prices</h2>
            <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
          </li>
          <li>
            <img src="/images/icon-people-first.svg" alt="" />
            <h2>People First</h2>
            <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
