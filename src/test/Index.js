function enviarEmail(para, id, assunto, texto) {
  // Biblioteca de envio de email

  console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario {
  send() {
    enviarEmail("debora@gmail.com", 6666, "Olá", "Tudo bem?");
  }
}
