import React from "react";

function CreateTicket() {
  const ticketCategories = [
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Your Zerodha Account",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and Orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      links: [
        "Mutual Funds",
        "National Pension Schema (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payment and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        {ticketCategories.map((category, index) => (
          <div key={index} className="col-4 p-5 mt-2 mb-2">
            <h4>
              <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
              {category.title}
            </h4>
            {category.links.map((link, linkIndex) => (
              <React.Fragment key={linkIndex}>
                <a
                  href=""
                  style={{ textDecoration: "none", lineHeight: "2.5" }}
                >
                  {link}
                </a>
                <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
