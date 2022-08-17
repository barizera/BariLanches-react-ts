import { SearchIcon } from "../../assets/icon";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { DateTime } from "luxon";
import { mockedProducts } from "../../mocks";
import ProductList from "../../components/ProductsList";
import { mockedCategories } from "../../mocks";
import { useState } from "react";
import { Category, Product } from "../../types";
import OrderDetails from "../../components/OrderDetails";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    mockedCategories[0]
  );

  const filteredProducts: Product[] = mockedProducts.filter(
    (element) => element.categoryId === selectedCategory.id
  );

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayLong}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;
  return (
    <Styled.HomeContainer>
      <Menu path="home" />
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.HeaderTittle>
            <h1>Bari Lanches</h1>
            <p>{formatedDate}</p>
          </Styled.HeaderTittle>
          <Styled.SearchSpot>
            <SearchIcon />
            <input placeholder="Procure seu lanche..." type="text" />
          </Styled.SearchSpot>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavBar>
            {mockedCategories.map((element) => {
              return (
                <Styled.CategoriesNavBarButton
                  active={element.name === selectedCategory.name}
                  onClick={() => setSelectedCategory(element)}
                >
                  {element.name}
                </Styled.CategoriesNavBarButton>
              );
            })}
          </Styled.CategoriesNavBar>
          <Styled.ProductsHeader>
            <h2>Escolha seu lanche</h2>
            <Styled.TableSelect defaultValue="">
              <option value="" disabled>
                Escolha a mesa
              </option>
              <option value="1">Mesa 01</option>
              <option value="2">Mesa 02</option>
              <option value="3">Mesa 03</option>
              <option value="4">Mesa 04</option>
            </Styled.TableSelect>
          </Styled.ProductsHeader>
          <ProductList list={filteredProducts} />
        </section>
      </Styled.HomeContentContainer>
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;
