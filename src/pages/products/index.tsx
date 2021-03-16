import Products from "components/Products";
import React from "react";
import { IProducts } from "types/product.types";

const AllProductsPage = () => {
  return (
    <div className="grid-4">
      {products.map((product, i: number) => (
        <Products key={i} product={product} />
      ))}
    </div>
  );
};

export default AllProductsPage;

const products: IProducts[] = [
  {
    id: 6781,
    picture: "https://img.innoloft.de/products/product_783016a3.png",
    name: "LoftOS",
    description: `"Innoloft creates the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors. Our unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world. Companies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition. `,
    type: {
      id: 2,
      name: "Software",
    },
    categories: [
      { id: 5101, name: "IT Platforms" },
      { id: 5100, name: "B2B markets" },
    ],
    implementationEffortText: null,
    investmentEffort: "< 25.000€",

    trl: {
      id: 9,
      name:
        "TRL 9 – Actual system proven in operational environment (established product available)",
    },
    user: {
      id: 284,
      email: "c.stirner@innoloft.com",
      firstName: "Christopher",
      lastName: "Stirner",
      sex: 1,
      profilePicture: "https://img.innoloft.de/users/user_8b245d25.png",
      position: "Chief Strategy Officer",
    },
    company: {
      name: "Innoloft GmbH",
      logo: "https://img.innoloft.de/logos/unt_7838d306.png",
      address: {
        id: null,
        country: {
          name: "Deutschland",
          region: null,
        },
        state: null,
        city: {
          name: "Aachen",
          countryId: null,
          stateId: null,
        },
        street: "Jülicher Straße",
        house: "72a",
        zipCode: "52070",
        longitude: "6.100367",
        latitude: "50.779729",
        fallbackString: null,
        cityRegion: null,
      },
    },
    businessModels: [
      {
        id: 65,
        name: "Pay-Per-Use",
      },
      {
        id: 1155,
        name: "Subscription",
      },
      {
        id: 374,
        name: "White-Label",
      },
      {
        id: 66,
        name: "Peer-to-Peer (P2P)",
      },
    ],
  },
  {
    id: 6781,
    picture: "https://img.innoloft.de/products/product_783016a3.png",
    name: "LoftOS",
    description: `"Innoloft creates the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors. Our unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world. Companies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition. `,
    type: {
      id: 2,
      name: "Software",
    },
    categories: [
      { id: 5101, name: "IT Platforms" },
      { id: 5100, name: "B2B markets" },
    ],
    implementationEffortText: null,
    investmentEffort: "< 25.000€",

    trl: {
      id: 9,
      name:
        "TRL 9 – Actual system proven in operational environment (established product available)",
    },
    user: {
      id: 284,
      email: "c.stirner@innoloft.com",
      firstName: "Christopher",
      lastName: "Stirner",
      sex: 1,
      profilePicture: "https://img.innoloft.de/users/user_8b245d25.png",
      position: "Chief Strategy Officer",
    },
    company: {
      name: "Innoloft GmbH",
      logo: "https://img.innoloft.de/logos/unt_7838d306.png",
      address: {
        id: null,
        country: {
          name: "Deutschland",
          region: null,
        },
        state: null,
        city: {
          name: "Aachen",
          countryId: null,
          stateId: null,
        },
        street: "Jülicher Straße",
        house: "72a",
        zipCode: "52070",
        longitude: "6.100367",
        latitude: "50.779729",
        fallbackString: null,
        cityRegion: null,
      },
    },
    businessModels: [
      {
        id: 65,
        name: "Pay-Per-Use",
      },
      {
        id: 1155,
        name: "Subscription",
      },
      {
        id: 374,
        name: "White-Label",
      },
      {
        id: 66,
        name: "Peer-to-Peer (P2P)",
      },
    ],
  },
  {
    id: 6781,
    picture: "https://img.innoloft.de/products/product_783016a3.png",
    name: "LoftOS",
    description: `"Innoloft creates the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors. Our unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world. Companies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition. `,
    type: {
      id: 2,
      name: "Software",
    },
    categories: [
      { id: 5101, name: "IT Platforms" },
      { id: 5100, name: "B2B markets" },
    ],
    implementationEffortText: null,
    investmentEffort: "< 25.000€",

    trl: {
      id: 9,
      name:
        "TRL 9 – Actual system proven in operational environment (established product available)",
    },
    user: {
      id: 284,
      email: "c.stirner@innoloft.com",
      firstName: "Christopher",
      lastName: "Stirner",
      sex: 1,
      profilePicture: "https://img.innoloft.de/users/user_8b245d25.png",
      position: "Chief Strategy Officer",
    },
    company: {
      name: "Innoloft GmbH",
      logo: "https://img.innoloft.de/logos/unt_7838d306.png",
      address: {
        id: null,
        country: {
          name: "Deutschland",
          region: null,
        },
        state: null,
        city: {
          name: "Aachen",
          countryId: null,
          stateId: null,
        },
        street: "Jülicher Straße",
        house: "72a",
        zipCode: "52070",
        longitude: "6.100367",
        latitude: "50.779729",
        fallbackString: null,
        cityRegion: null,
      },
    },
    businessModels: [
      {
        id: 65,
        name: "Pay-Per-Use",
      },
      {
        id: 1155,
        name: "Subscription",
      },
      {
        id: 374,
        name: "White-Label",
      },
      {
        id: 66,
        name: "Peer-to-Peer (P2P)",
      },
    ],
  },
  {
    id: 6781,
    picture: "https://img.innoloft.de/products/product_783016a3.png",
    name: "LoftOS",
    description: `"Innoloft creates the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors. Our unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world. Companies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition. `,
    type: {
      id: 2,
      name: "Software",
    },
    categories: [
      { id: 5101, name: "IT Platforms" },
      { id: 5100, name: "B2B markets" },
    ],
    implementationEffortText: null,
    investmentEffort: "< 25.000€",

    trl: {
      id: 9,
      name:
        "TRL 9 – Actual system proven in operational environment (established product available)",
    },
    user: {
      id: 284,
      email: "c.stirner@innoloft.com",
      firstName: "Christopher",
      lastName: "Stirner",
      sex: 1,
      profilePicture: "https://img.innoloft.de/users/user_8b245d25.png",
      position: "Chief Strategy Officer",
    },
    company: {
      name: "Innoloft GmbH",
      logo: "https://img.innoloft.de/logos/unt_7838d306.png",
      address: {
        id: null,
        country: {
          name: "Deutschland",
          region: null,
        },
        state: null,
        city: {
          name: "Aachen",
          countryId: null,
          stateId: null,
        },
        street: "Jülicher Straße",
        house: "72a",
        zipCode: "52070",
        longitude: "6.100367",
        latitude: "50.779729",
        fallbackString: null,
        cityRegion: null,
      },
    },
    businessModels: [
      {
        id: 65,
        name: "Pay-Per-Use",
      },
      {
        id: 1155,
        name: "Subscription",
      },
      {
        id: 374,
        name: "White-Label",
      },
      {
        id: 66,
        name: "Peer-to-Peer (P2P)",
      },
    ],
  },
];
