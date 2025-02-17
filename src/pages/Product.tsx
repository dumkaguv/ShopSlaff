import { useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <div>Product ID: {id}</div>;
};

export default Product;
