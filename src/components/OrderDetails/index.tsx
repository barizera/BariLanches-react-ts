import Button from "../Button";
import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <h2>Pedido #1</h2>
        <div>
          <button>Retirada no balcão</button>
          <button>P/ Viagem</button>
          <button>Delivery</button>
        </div>
      </Styled.OrderDetailsHeader>
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
      <Button text="Continue para pagamento" onClick={() => {}} size="large" />
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
