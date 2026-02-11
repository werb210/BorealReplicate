import { useEffect } from "react";

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      element.setAttribute(key, value);
    }
  });
}

function setLink(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      element.setAttribute(key, value);
    }
  });
}

function upsertScript(id, content) {
  let element = document.head.querySelector(`script[data-helmet-id=\"${id}\"]`);
  if (!element) {
    element = document.createElement("script");
    element.setAttribute("data-helmet-id", id);
    document.head.appendChild(element);
  }

  element.setAttribute("type", "application/ld+json");
  element.textContent = content;
}

export function Helmet({ children }) {
  useEffect(() => {
    const childList = Array.isArray(children) ? children : [children];

    childList.forEach((child) => {
      if (!child || typeof child !== "object") {
        return;
      }

      const { type, props } = child;

      if (type === "title" && props?.children) {
        document.title = props.children;
      }

      if (type === "meta" && props) {
        if (props.name) {
          setMeta(`meta[name=\"${props.name}\"]`, props);
        } else if (props.property) {
          setMeta(`meta[property=\"${props.property}\"]`, props);
        }
      }

      if (type === "link" && props?.rel) {
        setLink(`link[rel=\"${props.rel}\"]`, props);
      }

      if (type === "script" && props?.type === "application/ld+json") {
        upsertScript("jsonld", props.children ?? "");
      }
    });
  }, [children]);

  return null;
}
