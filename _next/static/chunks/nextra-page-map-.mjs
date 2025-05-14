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
      "title": "SP8D Channel API Reference: Lock-Free Messaging for JavaScript & Node.js",
      "description": "Comprehensive SP8D Channel API reference for JavaScript and Node.js. Learn methods, options, diagnostics, troubleshooting, and best practices for lock-free, real-time, high-performance messaging.",
      "keywords": ["SP8D API", "channel API", "JavaScript", "Node.js", "lock-free messaging", "diagnostics", "concurrency", "high-performance messaging"],
      "canonical": "https://sp8d.github.io/api-reference/channel-api"
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
      "title": "SP8D SPSC Example: Single-Producer Single-Consumer in JavaScript & Node.js",
      "description": "Step-by-step SP8D SPSC example for JavaScript and Node.js. Learn how to implement ultra-low-latency, lock-free single-producer single-consumer channels for high-performance messaging.",
      "keywords": ["SP8D example", "SPSC", "single-producer single-consumer", "lock-free queue", "JavaScript", "Node.js", "concurrency", "high-performance messaging", "parallel programming"],
      "canonical": "https://sp8d.github.io/examples/basic-spsc"
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
      "title": "SP8D FAQ: Troubleshooting, Diagnostics & Concurrency in JavaScript & Node.js",
      "description": "Frequently asked questions about SP8D: browser support, diagnostics, backpressure, async iteration, and troubleshooting for high-performance JavaScript and Node.js messaging.",
      "keywords": ["SP8D FAQ", "troubleshooting", "browser support", "diagnostics", "backpressure", "async iteration", "concurrency", "JavaScript", "Node.js", "high-performance messaging"],
      "canonical": "https://sp8d.github.io/guides-and-howtos/faqs"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "SP8D: Ultra-Low-Latency Lock-Free Channels for JavaScript & Node.js",
    "description": "Discover SP8D, the fastest lock-free, observable protocol for real-time, cross-thread communication in JavaScript and Node.js. Learn features, use cases, and how to get started with high-performance messaging.",
    "keywords": ["SP8D", "lock-free channels", "real-time messaging", "AI concurrency", "browser communication", "SharedArrayBuffer", "Atomics", "multi-agent", "diagnostics", "JavaScript", "Node.js", "high-performance messaging", "parallel programming"],
    "canonical": "https://sp8d.github.io/"
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
      "title": "What is SP8D? Lock-Free Real-Time Messaging for JavaScript & Node.js",
      "description": "Learn what makes SP8D the best lock-free, high-performance protocol for real-time, observable data transfer in JavaScript and Node.js. Ideal for AI, finance, and multi-agent apps.",
      "keywords": ["SP8D", "what is SP8D", "lock-free protocol", "real-time data", "browser concurrency", "AI messaging", "Node.js", "SharedArrayBuffer", "diagnostics", "high-performance messaging", "parallel programming"],
      "canonical": "https://sp8d.github.io/introduction/what-is-sp8d"
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
      "title": "SP8D Concurrency Models: SPSC, MPSC, MPMC Explained for JavaScript & Node.js",
      "description": "Master SP8D concurrency models—SPSC, MPSC, and MPMC—for high-performance, lock-free communication in JavaScript and Node.js. Compare patterns, use cases, and implementation tips to optimize your multi-threaded apps.",
      "keywords": ["SP8D concurrency", "SPSC", "MPSC", "MPMC", "concurrency models", "lock-free", "multi-threading", "JavaScript", "Node.js", "high-performance messaging", "parallel programming"],
      "canonical": "https://sp8d.github.io/principles/concurrency-models"
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
      "title": "SP8D Recipes: Integration Patterns for JavaScript & Node.js",
      "description": "Common SP8D integration patterns and recipes for JavaScript and Node.js. Learn browser, Node.js, and AI/ML workflows with code samples and diagrams for high-performance messaging.",
      "keywords": ["SP8D recipes", "integration patterns", "JavaScript", "Node.js", "AI messaging", "browser workers", "concurrency", "high-performance messaging"],
      "canonical": "https://sp8d.github.io/quickstart/common-recipes"
    }
  }, {
    name: "installation",
    route: "/quickstart/installation",
    frontMatter: {
      "title": "Install SP8D: Quickstart Guide for JavaScript & Node.js",
      "description": "How to install SP8D for ultra-fast, lock-free cross-thread communication in JavaScript and Node.js. Step-by-step requirements, setup, and troubleshooting for high-performance messaging.",
      "keywords": ["SP8D installation", "quickstart", "JavaScript", "Node.js", "SharedArrayBuffer", "Atomics", "setup guide", "high-performance messaging"],
      "canonical": "https://sp8d.github.io/quickstart/installation"
    }
  }, {
    name: "minimal-example",
    route: "/quickstart/minimal-example",
    frontMatter: {
      "title": "SP8D Minimal Example: Lock-Free Messaging in JavaScript & Node.js",
      "description": "Minimal working SP8D example for real-time, lock-free messaging in JavaScript and Node.js. Copy-paste code for instant high-performance results.",
      "keywords": ["SP8D minimal example", "quickstart", "JavaScript", "Node.js", "lock-free messaging", "concurrency", "high-performance messaging"],
      "canonical": "https://sp8d.github.io/quickstart/minimal-example"
    }
  }]
}];