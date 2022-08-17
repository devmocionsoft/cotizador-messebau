export const listFromGltf = (gltfList) => {
  const list = [];
  gltfList.forEach((item) => {
    const name = item.name;
    let items = [];
    item.children.forEach((child) => {
      const array = child.children;
      let options = child.name.split(",");
      options.pop();
      console.log(name, options);
      array.forEach((layer) => {
        layer.options = options
        items.push(layer);
      });
    });
    const data = { name, items };
    list.push(data);
  });
  return list;
};
