// Webservices retornam para o usuário dados no formato JSON
// Dentro do Node os arquivos representam módulos

// Organização:
// pastas -> arquivos(módulos)

// Conteúdo do Módulo fica disponível apenas no próprio Módulo
// Exportar e Importar módulos para utilizá-los

// Formas de exportar

// this e exports são objetos
this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node!' // Adicionando chaves e valores dinâmicamente
module.exports.ateLogo = 'Até o próximo exemplo'