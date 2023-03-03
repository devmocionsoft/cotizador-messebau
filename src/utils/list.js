export const listFromGltf = (gltfList) => {
  const list = [];
  gltfList.forEach((item) => {
    const items = [];
    const name = item.name.replace(/_/g, " ")
    console.log(item);
    item.children.forEach((child) => {
      let [itemName, options] = child.name.split("0");
      child.options = options.split("_")
      child.tag = itemName.replace(/_/g, " ")
      child.visible = false
      items.push(child)
    });
    const data = { name, items };
    list.push(data);
  });
  return list;
};
