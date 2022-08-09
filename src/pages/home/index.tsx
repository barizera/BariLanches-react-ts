import { SearchIcon } from "../../assets/icon";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { DateTime } from "luxon";

const Home = () => {
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
            <Styled.CategoriesNavBarButton active>
              Salgados
            </Styled.CategoriesNavBarButton>
            <Styled.CategoriesNavBarButton>Doces</Styled.CategoriesNavBarButton>
            <Styled.CategoriesNavBarButton>
              Bebidas
            </Styled.CategoriesNavBarButton>
          </Styled.CategoriesNavBar>
        </section>
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
          <div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
          </div>
        </Styled.ProductsHeader>
      </Styled.HomeContentContainer>
      <aside>
        Aside pedidos
        <header>
          <h2>Número do Pedido</h2>
          <div>
            <button>Retirada no balcão</button>
            <button>P/ Viagem</button>
            <button>Delivery</button>
          </div>
        </header>
        <div>
          <h3>Item</h3>
          <h3>Qntd</h3>
          <h3>Preço</h3>
        </div>
        <div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
        </div>
        <div>
          <div>
            <p>Desconto:</p>
            <p>R$0</p>
          </div>
          <div>
            <p>Sub total:</p>
            <p>R$55,00</p>
          </div>
          <p>Escolha a mesa primeiro</p>
        </div>
        <button>Continue para o pagamento</button>
      </aside>
    </Styled.HomeContainer>
  );
};

export default Home;
