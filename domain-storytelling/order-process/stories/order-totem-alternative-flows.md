# Fluxos Alternativos para Realizar Pedido via Totem

## Fluxo Alternativo 1: Alteração de Pedido
- **Descrição**: O cliente deseja alterar o pedido antes de finalizar o pagamento no totem.
- **Fluxo**:
  1. O **cliente** acessa o resumo do pedido no **totem** e decide fazer alterações.
  2. O **totem** exibe a opção de modificar os itens selecionados.
  3. O **cliente** ajusta o pedido, confirmando as alterações no **totem**.
  4. O **totem** atualiza o pedido no **sistema de pedidos** e segue para a etapa de pagamento.

## Fluxo Alternativo 2: Falha no Pagamento
- **Descrição**: O cliente tenta realizar o pagamento, mas a transação falha.
- **Fluxo**:
  1. O **totem** notifica o **cliente** sobre a falha na transação.
  2. O **cliente** pode optar por tentar outro método de pagamento ou cancelar o pedido.
  3. Se optar por um novo método, o **cliente** reprocessa a transação no **totem**.
  4. Se o pedido for cancelado, o **sistema de pedidos** remove o pedido e o **cliente** recebe uma notificação.

## Fluxo Alternativo 3: Pedido Cancelado
- **Descrição**: O cliente decide cancelar o pedido antes ou após o pagamento.
- **Fluxo**:
  1. O **cliente** acessa o resumo no **totem** e escolhe a opção de cancelamento do pedido.
  2. O **totem** processa o cancelamento no **sistema de pedidos**.
  3. Se o pagamento já tiver sido efetuado, o **sistema de pagamento** inicia o processo de reembolso.
  4. O **sistema de pedidos** notifica a **cozinha** para interromper a preparação (caso já tenha sido iniciada).

---
### Considerações
Os fluxos alternativos devem ser considerados para garantir uma experiência de usuário robusta e lidar com cenários imprevistos.
