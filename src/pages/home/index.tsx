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
          <p>Lanches</p>
        </section>
        <div>
          <h2>Escolha seu lanche</h2>
          <select>
            <option value="Default">Escolha uma categoria</option>
            <option value="Sanduíche">Sanduíche</option>
            <option value="Sucos">Sucos</option>
            <option value="Pizza">Pizza</option>
            <option value="Salgados">Salgados</option>
          </select>
          <div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
          </div>
        </div>
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
