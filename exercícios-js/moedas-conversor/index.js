const puppeteer = require('puppeteer-core');
const path = require('path');
const { text, log, intro } = require('@clack/prompts');

intro("Bem-vindo ao conversor de moedas!");

async function robo() {
  const chromePath = path.join(
    'C:',
    'Program Files (x86)',
    'Google',
    'Chrome',
    'Application',
    'chrome.exe'
  );

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: false
  });

  const page = await browser.newPage();

  const moedaBase = await text({ message: "Digite qual é a moeda base (ex: dolar)" });
  const moedaFinal = await text({ message: "Digite qual é a moeda final (ex: real)" });

  const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}`;
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  await page.waitForSelector('.DFlfde.SwHCTb');

  const resultado = await page.evaluate(() => {
    const elemento = document.querySelector('.DFlfde.SwHCTb');
    return elemento ? elemento.innerText : 'Valor não encontrado';
  });

  log.info(`O valor de 1 ${moedaBase} para ${moedaFinal} é: ${resultado}`);
  await browser.close();
};

robo();