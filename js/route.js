const route = (event) => {
  const isNotLocalhost = window.location.origin.includes("kimiyori.github.io");
  const target = event.target.tagName.toLowerCase() === "a" ? event.target : event.target.closest("a");
  target.pathname = isNotLocalhost ? "/test-web-bee" + target.pathname : target.pathname;
};
