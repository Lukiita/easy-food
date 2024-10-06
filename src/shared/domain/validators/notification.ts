export class Notification {
  errors = new Map<string, string[] | string>();

  /**
   * Copia os erros de outra instância de Notification, mas adiciona um campo personalizado.
   * 
   * @param notification A instância de Notification de onde os erros serão copiados.
   * @param customField O campo ao qual os erros serão associados.
   */
  public copyErrorsWithCustomField(notification: Notification, customField: string) {
    notification.errors.forEach((value) => {
      if (Array.isArray(value)) {
        value.forEach((error) => {
          this.addError(error, customField);
        });
        return;
      }

      this.addError(value, customField);
    });
  }
  /**
   * Adiciona um erro para um campo específico.
   * Se o campo não for fornecido, o erro é armazenado como erro global.
   * 
   * @param error A mensagem de erro a ser adicionada.
   * @param field O campo ao qual o erro está associado (opcional).
   */
  public addError(error: string, field?: string): void {
    if (field) {
      const errors = (this.errors.get(field) ?? []) as string[];
      errors.indexOf(error) === -1 && errors.push(error);
      this.errors.set(field, errors);
    } else {
      this.errors.set(error, error);
    }
  }

  /**
   * Copia os erros de outra instância de Notification.
   * 
   * @param notification A instância de Notification de onde os erros serão copiados.
   */
  public copyErrors(notification: Notification) {
    notification.errors.forEach((value, field) => {
      this.setError(value, field);
    });
  }

  /**
   * Define erros para um campo específico ou para erros globais.
   * 
   * @param error A mensagem de erro ou um array de mensagens de erro.
   * @param field O campo ao qual o erro está associado (opcional).
   */
  public setError(error: string | string[], field?: string): void {
    if (field) {
      this.errors.set(field, Array.isArray(error) ? error : [error]);
    } else {
      if (Array.isArray(error)) {
        error.forEach((value) => {
          this.errors.set(value, value);
        });
        return;
      }
      this.errors.set(error, error);
    }
  }

  public hasErrors(): boolean {
    return this.errors.size > 0;
  }

  public clearErrors(): void {
    this.errors.clear();
  }

  public toJSON() {
    const errors: Array<string | { [key: string]: string[] }> = [];
    this.errors.forEach((value, key) => {
      if (typeof value === 'string') {
        errors.push(value);
      } else {
        errors.push({ [key]: value });
      }
    });
    return errors;
  }
}
