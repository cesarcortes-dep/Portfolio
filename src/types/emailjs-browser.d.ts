declare module "@emailjs/browser" {
  export function send(
    serviceID: string,
    templateID: string,
    templateParams?: Record<string, any>,
    publicKey?: string,
  ): Promise<any>;

  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement,
    publicKey?: string,
  ): Promise<any>;

  export default {
    send,
    sendForm,
  };
}
