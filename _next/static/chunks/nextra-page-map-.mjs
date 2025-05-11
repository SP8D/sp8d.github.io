import meta from "../../../pages/_meta.js";
import api_reference_meta from "../../../pages/api-reference/_meta.js";
import examples_meta from "../../../pages/examples/_meta.js";
import guides_and_howtos_meta from "../../../pages/guides-and-howtos/_meta.js";
import introduction_meta from "../../../pages/introduction/_meta.js";
import principles_meta from "../../../pages/principles/_meta.js";
import quickstart_meta from "../../../pages/quickstart/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "api-reference",
  route: "/api-reference",
  children: [{
    data: api_reference_meta
  }, {
    name: "channel-api",
    route: "/api-reference/channel-api",
    frontMatter: {
      "title": "API Reference: Channel"
    }
  }]
}, {
  name: "examples",
  route: "/examples",
  children: [{
    data: examples_meta
  }, {
    name: "basic-spsc",
    route: "/examples/basic-spsc",
    frontMatter: {
      "title": "Examples: Basic SPSC"
    }
  }]
}, {
  name: "guides-and-howtos",
  route: "/guides-and-howtos",
  children: [{
    data: guides_and_howtos_meta
  }, {
    name: "faqs",
    route: "/guides-and-howtos/faqs",
    frontMatter: {
      "title": "Frequently Asked Questions"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Start Here: Product Philosophy & Overview"
  }
}, {
  name: "introduction",
  route: "/introduction",
  children: [{
    data: introduction_meta
  }, {
    name: "what-is-sp8d",
    route: "/introduction/what-is-sp8d",
    frontMatter: {
      "title": "Introduction: What is SP8D?"
    }
  }]
}, {
  name: "principles",
  route: "/principles",
  children: [{
    data: principles_meta
  }, {
    name: "concurrency-models",
    route: "/principles/concurrency-models",
    frontMatter: {
      "title": "Principles: Concurrency Models"
    }
  }]
}, {
  name: "quickstart",
  route: "/quickstart",
  children: [{
    data: quickstart_meta
  }, {
    name: "common-recipes",
    route: "/quickstart/common-recipes",
    frontMatter: {
      "title": "Quickstart: Common Recipes"
    }
  }, {
    name: "installation",
    route: "/quickstart/installation",
    frontMatter: {
      "title": "Quickstart: Installation"
    }
  }, {
    name: "minimal-example",
    route: "/quickstart/minimal-example",
    frontMatter: {
      "title": "Quickstart: Minimal Example"
    }
  }]
}];