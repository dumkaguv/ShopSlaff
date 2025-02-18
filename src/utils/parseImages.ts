const parseImages = (images: string[]) => {
  try {
    JSON.parse(images.join(",").replaceAll("\\", ""));
  } catch (error) {
    console.log(error);
  }
};

export default parseImages;
