exports.getResponse = async url => {
  return (await fetch(url)).json();
};
