const scriptIsLoaded = (src) => {
  return Boolean(document.querySelector(`script[src="${src}"]`));
};

const loadScript = async (src) => {
  return new Promise(function (resolve, reject) {
    if (scriptIsLoaded(src)) {
      src.endsWith("map.js") && initMap();
      return resolve();
    }
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve();
    };
    script.onerror = () => reject(new Error(`Something went wrong with ${src}`));

    document.body.append(script);
  });
};

export const handleScriptLoading = (route) =>
  route?.scripts?.reduce((acc, src) => acc.then(() => loadScript(src)), Promise.resolve());
