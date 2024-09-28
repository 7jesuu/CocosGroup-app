## Вопросы и ответы

### Вопрос

**Приведи краткую интерпретацию лога ошибки (тип ошибки, что вызвало ошибку, возможное решение), указанного ниже:**


**Ответ:**

- **Тип ошибки:** AxiosError.
- **Описание:** Ошибка 404 говорит о том, что запрашиваемый ресурс не найден. Это может произойти, если API не существует по указанному адресу или если есть ошибка в пути запроса.
- **Возможное решение:** Проверить правильность URL-адреса и наличие нужного ресурса по этому адресу. Если ошибка на сервере, убедиться, что обработчик запросов существует и настроен верно.

### Вопрос

**Какой шаблон проектирования реализован коде указанном ниже?**

```typescript
public async globalWs__(
    incomingAction: WsActionsAcceptingEnum,
    data: any,
    profile: ProfileRepository,
    socket: Socket
  ) {
    switch (incomingAction) {
      case WsActionsAcceptingEnum.TICKET_OPEN_TICKET:
        // open ticket
        await this.wsRoleCheck(profile, [
          ProfileRoleEnum.AUCTION,
          ProfileRoleEnum.EDTECH,
          ProfileRoleEnum.REAL_ESTATE,
          ProfileRoleEnum.COMMON,
          ProfileRoleEnum.FOOD,
        ]);
        return this.ticketOpen(
          await validateByClassUtil(data, WsTicketCreateDto),
          profile,
          socket
        );

      case WsActionsAcceptingEnum.TICKET_CLOSE_TICKET:
        await this.wsRoleCheck(profile, [
          ProfileRoleEnum.ADMIN,
          ProfileRoleEnum.MODERATOR,
        ]);
        return this.ticketClose(
          await validateByClassUtil(data, WsTicketCloseDto),
          socket
        );

      case WsActionsAcceptingEnum.GENERAL_SEND_MESSAGE:
        await this.wsRoleCheck(profile, []);
        return this.sendMessageToChat(
          profile,
          await validateByClassUtil(data, WsGeneralSendMessageDto),
          socket
        );

      default:
        return;
    }
  }

*Ответ:**
- **Шаблон проектирования:** В данном коде реализован шаблон проектирования "Команда" (Command Pattern).
- **Почему:**  Код использует switch-case для определения действия, которое нужно выполнить, на основе входящего действия (incomingAction). Каждое действие обрабатывается отдельно и выполняется соответствующая логика.
