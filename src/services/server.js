import { createServer, Model } from "miragejs";

createServer({
  models: {
    education: Model,
    skills: Model,
  },

  seeds(server) {
    server.create("education", {
      date: 2001,
      title: "Title 0",
      text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
    });
    server.create("education", {
      date: 2000,
      title: "Title 1",
      text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
    });
    server.create("education", {
      date: 2012,
      title: "Title 2",
      text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
    });
  },

  routes() {
    this.get(
      "/api/educations",
      (schema) => {
        return schema.educations.all();
      },
      { timing: 3000 }
    );

    this.get("/api/skills", (schema) => {
      return schema.skills.all();
    });

    this.post("/api/skills", (schema, request) => {
      const skillData = JSON.parse(request.requestBody);
      return schema.skills.create(skillData);
    });
  },
});
