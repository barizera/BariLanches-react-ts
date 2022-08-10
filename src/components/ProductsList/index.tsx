import * as Styled from "./styles";
import { Product } from "../../types";
import ProductCard from "../ProductCard";

interface ProductsListProps {
  list: Product[];
}

const ProductList = ({ list }: ProductsListProps) => {
  return (
    <Styled.ProductsListContainer>
      {list.map((element) => (
        <ProductCard product={element} key={element.id} />
      ))}
    </Styled.ProductsListContainer>
  );
};
export default ProductList;
