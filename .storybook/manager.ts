import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "My Storybook",
    brandUrl: "https://www.linkedin.com/in/joao-pinheiro-neto/",
    brandImage: "https://media.licdn.com/dms/image/D4D16AQGSEufVGbNrKg/profile-displaybackgroundimage-shrink_350_1400/0/1693961667542?e=1719446400&v=beta&t=wVei-PfYn3fK1l0NDjUmdHKWdJBI14F08q2QNVV-48M",
  }),
});
