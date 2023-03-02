export const listFromGltf = (gltfList) => {
  const list = [];
  gltfList.forEach((item) => {
    const items = [];
    const name = item.name;
    console.log(item);
    item.children.forEach((child) => {
      let [name, options] = child.name.split("0");
      child.options = options.split("_")
      child.tag = name
      child.visible = false
      items.push(child)
    });
    const data = { name, items };
    list.push(data);
  });
  console.log(list);
  return list;
};
