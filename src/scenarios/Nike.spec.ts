import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import NikePage from '../support/pages/NikePage';

test.describe('Nike - busca e página de produto', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let nikePage: NikePage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.nike')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    nikePage = new NikePage(page);
    await nikePage.fecharPopupLocalizacao();
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  });

  test('Buscar por Air Max e exibir os produtos', async () => {
    await nikePage.buscarProduto('air max');
    await nikePage.validarResultadoBusca('air max');
  });

  test('Abrir um produto a partir da busca', async () => {
    await nikePage.buscarProduto('air max');
    const nomeProduto = await nikePage.abrirPrimeiroProduto();
    await nikePage.validarPaginaProduto(nomeProduto);
  });

  test('Adicionar na sacola sem escolher o tamanho', async () => {
    await nikePage.buscarProduto('air max');
    await nikePage.abrirPrimeiroProduto();
    await nikePage.adicionarSacolaSemTamanho();
    await nikePage.validarMensagemTamanho();
  });
});
