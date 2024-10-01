# User Story 2: Realizar Pedido via Totem

## Descrição
Como **cliente**, eu quero realizar meu pedido via **totem** de autoatendimento para escolher os itens  do cardápio e realizar o pagamento de forma rápida e eficiente.

### **Atores**
- **Cliente**: Pessoa que faz o pedido e realiza o pagamento.
- **Totem**: Dispositivo onde o cliente seleciona os itens do cardápio, realiza o pedido e efetua o pagamento.
- **Sistema de pedidos**: Sistema utilizado pelo totem para registrar e enviar os pedidos à cozinha.
- **Sistema de pagamento**: Sistema utilizado pelo totem para processar o pagamento do pedido.
- **Cozinha**: Área onde os pedidos são preparados com base nas informações registradas no sistema.

## Fluxo Principal

1. O **cliente** se aproxima do **totem**, escolhe se quer se identificar ou não e seleciona os itens do cardápio.
2. O **totem** registra o pedido no **sistema de pedidos**.
3. O **cliente** realiza o pagamento via **totem**, podendo pagar com PIX ou cartão, e o **totem** envia os dados de pagamento para o **sistema de pagamento** processar a transação.
4. Após a confirmação do pagamento pelo **sistema de pagamento**, o pedido é confirmado no **sistema de pedidos** e enviado automaticamente para a **cozinha**.
5. O **cliente** aguarda na área de espera, enquanto o **sistema de pedidos** atualiza o status do pedido para a **cozinha**.
6. Quando o pedido estiver pronto, a senha do **cliente** (número do pedido) é exibida no painel de retirada.
7. O **cliente** retira o pedido no balcão.

## Regras de Negócio
Para mais informações sobre regras de negócio, consulte o arquivo [order-process.md](order-process.md).

### Informações Adicionais
- Esta história de usuário foca no processo de autoatendimento realizado via totem de autoatendimento, mas pode ser complementada com um fluxo manual de interação entre o cliente e o atendente.
