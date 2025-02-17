const parseImages = (images: string[]) => 
  JSON.parse(images.join(", ").replaceAll("\\", ""));

export default parseImages;
