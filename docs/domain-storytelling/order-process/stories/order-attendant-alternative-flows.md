# Fluxos Alternativos para Realizar Pedido com o Atendente

## Fluxo Alternativo 1: Alteração de Pedido
- **Descrição**: O cliente deseja alterar o pedido antes do pagamento.
- **Fluxo**:
  1. O **cliente** solicita a alteração ao **atendente**.
  2. O **atendente** acessa o pedido no **sistema** e faz as alterações solicitadas.
  3. O **cliente** revisa o novo pedido e realiza o pagamento.

## Fluxo Alternativo 2: Falha no Pagamento
- **Descrição**: O cliente tenta realizar o pagamento, mas a transação falha.
- **Fluxo**:
  1. O **atendente** informa o **cliente** sobre a falha na transação.
  2. O **cliente** pode optar por tentar outro método de pagamento ou cancelar o pedido.
  3. Se optar por um novo método, o **atendente** processa a nova transação.
  4. Se o pedido for cancelado, o **sistema** notifica a **cozinha** para interromper a preparação.

## Fluxo Alternativo 3: Pedido Cancelado
- **Descrição**: O cliente decide cancelar o pedido após o pagamento.
- **Fluxo**:
  1. O **cliente** informa ao **atendente** que deseja cancelar o pedido.
  2. O **atendente** processa o cancelamento no **sistema**.
  3. O **sistema** notifica a **cozinha** para interromper a preparação.

---
### Considerações
Os fluxos alternativos devem ser considerados para garantir uma experiência de usuário robusta e lidar com cenários imprevistos.
