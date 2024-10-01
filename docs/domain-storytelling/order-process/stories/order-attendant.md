# User Story 1: Realizar Pedido com o Atendente

## Descrição
Como **cliente**, eu quero realizar meu pedido com o **atendente** para escolher os itens do cardápio e realizar o pagamento de forma rápida e eficiente.

### **Atores:**
- **Cliente**: Pessoa que faz o pedido e realiza o pagamento.
- **Atendente**: Funcionário responsável por registrar o pedido e processar o pagamento.
- **Sistema de pedidos**: Sistema utilizado pelo atendente para registrar e enviar os pedidos à cozinha.
- **Sistema de pagamento**: Sistema utilizado pelo atendente para efeutar o pagamento do pedido.
- **Cozinha**: Área onde os pedidos são preparados com base nas informações registradas no sistema.

## Fluxo Principal

1. O **cliente** se aproxima do balcão e faz o pedido ao **atendente**, especificando os itens desejados do cardápio.
2. O **atendente** registra o pedido no **sistema de pedidos**, confirmando os itens escolhidos pelo cliente.
3. O **cliente** realiza o pagamento, que pode ser em dinheiro ou cartão, e o atendente processa a transação no **sistema de pagamento**.
4. Após a confirmação do pagamento, o **sistema de pedidos** envia automaticamente o pedido para a **cozinha**, onde será preparado.
5. O **cliente** aguarda na área de espera, enquanto o **sistema de pedidos** atualiza o status do pedido para a **cozinha**.
6. Quando o pedido estiver pronto, a senha do **cliente** (número do pedido) é exibida no painel de retirada.
7. O **cliente** retira o pedido no balcão.

## Fluxos Alternativos
Para mais informações sobre fluxos alternativos, consulte o arquivo [order-attendant-alternative-flows.md](order-attendant-alternative-flows.md).

## Regras de Negóciob
Para mais informações sobre regras de negócio, consulte o arquivo [order-process.md](../roles/order-process.md).

---

### Informações Adicionais
- Esta história de usuário foca no processo manual de interação entre o cliente e o atendente, mas pode ser complementada com um fluxo de autoatendimento para clientes que preferem realizar o pedido de maneira autônoma.
