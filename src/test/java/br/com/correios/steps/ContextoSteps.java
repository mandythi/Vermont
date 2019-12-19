package br.com.correios.steps;

import org.openqa.selenium.WebDriver;

import br.com.correios.hooks.Hooks;
import cucumber.api.java.pt.Dado;

public class ContextoSteps {
	
	private WebDriver driver;
	
	public ContextoSteps() {
		driver = Hooks.getDriver();
	}
	
	@Dado("^que acesso a url \"([^\"]*)\"$")
	public void que_acesso_a_url(String url){
	    driver.navigate().to(url);
	}

}
