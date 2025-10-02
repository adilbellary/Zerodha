import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="fw-bold">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center mt-5">
        {/* Zerodha Fund House */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={{ width: "140px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ width: "140px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Tijori */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/tijoriLogo.svg"
            alt="Tijori"
            style={{ width: "140px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        {/* Streak */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={{ width: "140px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Smallcase */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{ width: "140px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Thematic investment platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        {/* Ditto */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={{ width: "140px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <div className="text-center mt-4 mb-5">
        <button className="btn btn-primary px-4 fs-5">Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
