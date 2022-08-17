export const listFromGltf = (gltfList) => {
  const list = [];
  gltfList.forEach((item) => {
    const name = item.name;
    let items = [];
    item.children.forEach((child) => {
      const array = child.children;
      let options = child.name.split(",");
      options.pop();
      array.forEach((layer) => {
        layer.options = options
        layer.visible = false
        items.push(layer);
      });
    });
    const data = { name, items };
    list.push(data);
  });
  return list;
};
