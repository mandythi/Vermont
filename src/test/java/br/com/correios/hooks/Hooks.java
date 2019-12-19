package br.com.correios.hooks;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	private static Scenario cenario;
	private static WebDriver driver;
	
	@Before
	public void AbreNavegador(Scenario cenario) {
		
		Hooks.cenario = cenario;
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);		
	}
	
	@After
	public void FechaNavegador() {
		
		if(!cenario.isFailed()) {
			cenario.write("Passou");
		}
		else
		{
			cenario.write("Falhou");
		}
		
		cenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES), "image/png");
		
		driver.quit();
	}
	
	public static WebDriver getDriver() {
		return driver;
	}
	
	public static Scenario getCenario() {
		return cenario;
	}
}
