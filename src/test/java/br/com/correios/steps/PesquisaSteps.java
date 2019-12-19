package br.com.correios.steps;

import java.util.ArrayList;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import br.com.correios.genericos.MetodosGenericos;
import br.com.correios.hooks.Hooks;
import cucumber.api.Scenario;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;


public class PesquisaSteps {
	
	MetodosGenericos generico = new MetodosGenericos() ;
	private WebDriver driver;
	
	public PesquisaSteps() {
		driver = Hooks.getDriver();
	}
	
	@Quando("^preencho um \"([^\"]*)\" no campo de busca$")
	public void preencho_um_no_campo_de_busca(String valor){
	   driver.findElement(By.id("acesso-busca")).sendKeys(valor);
	}
	
	@Quando("^clico no botao lupa$")
	public void clico_no_botao_lupa() {
	    driver.findElement(By.id("acesso-busca")).submit();
	}

	@Entao("^valido o resultado da busca$")
	public void valido_o_resultado_da_busca() {
		
		Scenario cenario = Hooks.getCenario();
		ArrayList<String> AbaResultado = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(AbaResultado.get(1));
		
		WebElement TabelaResult = driver.findElement(By.className("tmptabela"));
		
		if (TabelaResult.isDisplayed()) {
			generico.EscreveOutput(cenario, TabelaResult);
		} else {
			cenario.write("Não foram apresentados os resultados da pesquisa!");
			Assert.fail();
		}
	}
	
}
