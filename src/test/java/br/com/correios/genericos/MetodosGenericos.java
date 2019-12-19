package br.com.correios.genericos;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.Scenario;

public class MetodosGenericos {

public void EscreveOutput(Scenario cenario, WebElement Tabela) {
		
		String TabelaHtml = "<b>Resultado da Pesquisa</b><br><br><table>";
		List<WebElement> cabecalhos = Tabela.findElements(By.tagName("th"));
		
		// Pega cabeçalhos
		for(int i=0; i<=cabecalhos.size()-1;i++) {
			TabelaHtml = TabelaHtml + "<th>" + cabecalhos.get(i).getText() + "</th>";
		}
		
		List<WebElement> linhas = Tabela.findElements(By.tagName("tr"));
	
		// Pega linhas
		for(int x=0; x<=linhas.size()-1; x++) {
			TabelaHtml = TabelaHtml +"<tr>";
			
			List<WebElement> colunas = linhas.get(x).findElements(By.tagName("td"));
			
			// Pega colunas
			for(int y=0; y<=colunas.size()-1; y++) {
				TabelaHtml = TabelaHtml +"<td>"+ colunas.get(y).getText()+"</td>";
			}
			
			TabelaHtml = TabelaHtml + "</tr>";
			
		}
		
		TabelaHtml = TabelaHtml + "</table><br>";
		cenario.write(TabelaHtml);
	}
	
}
