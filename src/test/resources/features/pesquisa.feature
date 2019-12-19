# language: pt
# Autor: Amanda Miranda
# E-mail: mandy.thiago2511@gmail.com
@pesquisa
Funcionalidade: Pesquisa
  Eu como usuario acesso o sistema
  Quero realizar uma pesquisa
  Para obter um ou mais endereços

  Contexto: possibilidade de acessar o sistema
    Dado que acesso a url "http://www.correios.com.br/"

  @pesquisa01
  Esquema do Cenario: <CT> - Realizar pesquisa
    Quando preencho um <valor> no campo de busca
    E clico no botao lupa
    Entao valido o resultado da busca

    Exemplos: 
      | CT  | valor                 |
      | 001 | "04347090"            |
      | 002 | "rua leopoldo miguez" |
