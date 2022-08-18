import Button from "../Button";
import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <h2>Pedido #1</h2>
        <div>
          <Button text="Retirada no balcão" size="small" />
          <Button text="P/viagem" size="small" variant="disable" />
          <Button text="Delivery" size="small" variant="disable" />
        </div>
      </Styled.OrderDetailsHeader>
      <Styled.CheckoutDetailsContainer>
        <Styled.CheckoutDetailsHeader>
          <h3>Item</h3>
          <h3>Qntd</h3>
          <h3>Preço</h3>
        </Styled.CheckoutDetailsHeader>
        <div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
        </div>
      </Styled.CheckoutDetailsContainer>
      <Styled.OrderDetailsFooter>
        <div>
          <p>Desconto:</p>
          <p>R$0</p>
        </div>
        <div>
          <p>Sub total:</p>
          <p>R$55,00</p>
        </div>
        <Button
          text="Continue para pagamento"
          onClick={() => {}}
          size="large"
        />
      </Styled.OrderDetailsFooter>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
