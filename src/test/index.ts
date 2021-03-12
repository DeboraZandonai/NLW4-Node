interface DadosDeEnviarEmail {
  para: string;
  id: string;
  assunto: string;
  texto: string;
}

function enviarEmaill({ para, id, assunto, texto }: DadosDeEnviarEmail) {
  console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuarioo {
  send() {
    enviarEmail({
      para: "debora@gmail.com",
      id: "6666",
      assunto: "Olá",
      texto: "Tudo bem?",
    });
  }
}
