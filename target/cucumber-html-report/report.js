$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("pesquisa.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 2,
      "value": "# Autor: Amanda Miranda"
    },
    {
      "line": 3,
      "value": "# E-mail: mandy.thiago2511@gmail.com"
    }
  ],
  "line": 5,
  "name": "Pesquisa",
  "description": "Eu como usuario acesso o sistema\nQuero realizar uma pesquisa\nPara obter um ou mais endereços",
  "id": "pesquisa",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@pesquisa"
    }
  ]
});
formatter.scenarioOutline({
  "line": 14,
  "name": "\u003cCT\u003e - Realizar pesquisa",
  "description": "",
  "id": "pesquisa;\u003cct\u003e---realizar-pesquisa",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 13,
      "name": "@pesquisa01"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "preencho um \u003cvalor\u003e no campo de busca",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "clico no botao lupa",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "valido o resultado da busca",
  "keyword": "Entao "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "pesquisa;\u003cct\u003e---realizar-pesquisa;",
  "rows": [
    {
      "cells": [
        "CT",
        "valor"
      ],
      "line": 20,
      "id": "pesquisa;\u003cct\u003e---realizar-pesquisa;;1"
    },
    {
      "cells": [
        "001",
        "\"04347090\""
      ],
      "line": 21,
      "id": "pesquisa;\u003cct\u003e---realizar-pesquisa;;2"
    },
    {
      "cells": [
        "002",
        "\"rua leopoldo miguez\""
      ],
      "line": 22,
      "id": "pesquisa;\u003cct\u003e---realizar-pesquisa;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 10525585400,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que acesso a url \"http://www.correios.com.br/\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.correios.com.br/",
      "offset": 18
    }
  ],
  "location": "ContextoSteps.que_acesso_a_url(String)"
});
formatter.result({
  "duration": 4311278200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "001 - Realizar pesquisa",
  "description": "",
  "id": "pesquisa;\u003cct\u003e---realizar-pesquisa;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@pesquisa"
    },
    {
      "line": 13,
      "name": "@pesquisa01"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "preencho um \"04347090\" no campo de busca",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "clico no botao lupa",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "valido o resultado da busca",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "04347090",
      "offset": 13
    }
  ],
  "location": "PesquisaSteps.preencho_um_no_campo_de_busca(String)"
});
formatter.result({
  "duration": 128014500,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaSteps.clico_no_botao_lupa()"
});
formatter.result({
  "duration": 73792300,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaSteps.valido_o_resultado_da_busca()"
});
formatter.write("\u003cb\u003eResultado da Pesquisa\u003c/b\u003e\u003cbr\u003e\u003cbr\u003e\u003ctable\u003e\u003cth\u003eLogradouro/Nome:\u003c/th\u003e\u003cth\u003eBairro/Distrito:\u003c/th\u003e\u003cth\u003eLocalidade/UF:\u003c/th\u003e\u003cth\u003eCEP:\u003c/th\u003e\u003ctr\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eRua Pedro André \u003c/td\u003e\u003ctd\u003eJardim Oriental \u003c/td\u003e\u003ctd\u003eSão Paulo/SP \u003c/td\u003e\u003ctd\u003e04347-090\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cbr\u003e");
formatter.result({
  "duration": 14335701100,
  "status": "passed"
});
formatter.write("Passou");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 966238000,
  "status": "passed"
});
formatter.before({
  "duration": 9442997600,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que acesso a url \"http://www.correios.com.br/\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.correios.com.br/",
      "offset": 18
    }
  ],
  "location": "ContextoSteps.que_acesso_a_url(String)"
});
formatter.result({
  "duration": 2903265300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "002 - Realizar pesquisa",
  "description": "",
  "id": "pesquisa;\u003cct\u003e---realizar-pesquisa;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@pesquisa"
    },
    {
      "line": 13,
      "name": "@pesquisa01"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "preencho um \"rua leopoldo miguez\" no campo de busca",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "clico no botao lupa",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "valido o resultado da busca",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "rua leopoldo miguez",
      "offset": 13
    }
  ],
  "location": "PesquisaSteps.preencho_um_no_campo_de_busca(String)"
});
formatter.result({
  "duration": 162236000,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaSteps.clico_no_botao_lupa()"
});
formatter.result({
  "duration": 64269000,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaSteps.valido_o_resultado_da_busca()"
});
formatter.write("\u003cb\u003eResultado da Pesquisa\u003c/b\u003e\u003cbr\u003e\u003cbr\u003e\u003ctable\u003e\u003cth\u003eLogradouro/Nome:\u003c/th\u003e\u003cth\u003eBairro/Distrito:\u003c/th\u003e\u003cth\u003eLocalidade/UF:\u003c/th\u003e\u003cth\u003eCEP:\u003c/th\u003e\u003ctr\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eRua Leopoldo Miguez \u003c/td\u003e\u003ctd\u003eStiep \u003c/td\u003e\u003ctd\u003eSalvador/BA \u003c/td\u003e\u003ctd\u003e41770-660\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eRua Leopoldo Miguez \u003c/td\u003e\u003ctd\u003eHavaí \u003c/td\u003e\u003ctd\u003eBelo Horizonte/MG \u003c/td\u003e\u003ctd\u003e30570-630\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eRua Leopoldo Miguez \u003c/td\u003e\u003ctd\u003eIdeal \u003c/td\u003e\u003ctd\u003eIpatinga/MG \u003c/td\u003e\u003ctd\u003e35162-194\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eRua Leopoldo Miguez \u003c/td\u003e\u003ctd\u003eParque Paulista \u003c/td\u003e\u003ctd\u003eDuque de Caxias/RJ \u003c/td\u003e\u003ctd\u003e25261-010\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eRua Leopoldo Miguez - lado ímpar \u003c/td\u003e\u003ctd\u003eCopacabana \u003c/td\u003e\u003ctd\u003eRio de Janeiro/RJ \u003c/td\u003e\u003ctd\u003e22060-021\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eRua Leopoldo Miguez - lado par \u003c/td\u003e\u003ctd\u003eCopacabana \u003c/td\u003e\u003ctd\u003eRio de Janeiro/RJ \u003c/td\u003e\u003ctd\u003e22060-020\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eRua Leopoldo Miguez \u003c/td\u003e\u003ctd\u003eTrês Vendas \u003c/td\u003e\u003ctd\u003ePelotas/RS \u003c/td\u003e\u003ctd\u003e96060-750\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eRua Leopoldo Miguez \u003c/td\u003e\u003ctd\u003eCambuci \u003c/td\u003e\u003ctd\u003eSão Paulo/SP \u003c/td\u003e\u003ctd\u003e01518-020\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eRua Leopoldo Augusto Miguez \u003c/td\u003e\u003ctd\u003eMelvi \u003c/td\u003e\u003ctd\u003ePraia Grande/SP \u003c/td\u003e\u003ctd\u003e11712-170\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003cbr\u003e");
formatter.result({
  "duration": 14887352400,
  "status": "passed"
});
formatter.write("Passou");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 957268500,
  "status": "passed"
});
});