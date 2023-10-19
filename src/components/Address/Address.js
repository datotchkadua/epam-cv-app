import React from "react";
import "./Address.scss";
import { ReactComponent as PhoneSvg } from "../../assets/phone.svg";
import { ReactComponent as EmailSvg } from "../../assets/email.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitterLogo.svg";
import { ReactComponent as FacebookLogo } from "../../assets/facebookLogo.svg";
import { ReactComponent as SkypeLogo } from "../../assets/skypeLogo.svg";

export const Address = () => {
  const addressData = [
    {
      id: 1,
      Svgcomponent: PhoneSvg,
      header: "",
      link: "500 342 242",
      href: "tel:+995595032112",
    },
    {
      id: 2,
      Svgcomponent: EmailSvg,
      header: "",
      link: "dato@gmail.com",
      href: "mailto:dato@gmail.com",
    },
    {
      id: 3,
      Svgcomponent: TwitterLogo,
      header: "Twitter",
      link: "https://twitter.com/wordpress",
      href: "https://twitter.com/wordpress",
    },
    {
      id: 4,
      Svgcomponent: FacebookLogo,
      header: "Facebook",
      link: "https://www.facebook.com",
      href: "https://www.facebook.com",
    },
    {
      id: 5,
      Svgcomponent: SkypeLogo,
      header: "Skye",
      link: "datoo944",
      href: "skype:datoo944?call",
    },
  ];

  return (
    <section className="address" id="contacts">
      <h2 className="title">Contacts</h2>

      {addressData.map(({ id, Svgcomponent, header, link, href }) => {
        return (
          <div className="address__links" key={id}>
            <Svgcomponent />
            <div className="address__links--box">
              <h3 className="address__links--box__header">{header}</h3>
              <a className="address__links--box__link" href={`${href}`}>
                {link}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};
