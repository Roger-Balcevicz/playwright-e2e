import { Page, expect } from '@playwright/test';
import NikeElements from '../elements/NikeElements';
import BasePage from './BasePage';

export default class NikePage extends BasePage {
  readonly nikeElements: NikeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.nikeElements = new NikeElements(page);
  }

  // o site pergunta a localizacao quando o acesso vem do Brasil,
  // o handler fecha o popup sempre que ele aparecer
  async fecharPopupLocalizacao(): Promise<void> {
    await this.page.addLocatorHandler(
      this.nikeElements.getDialogLocalizacao(),
      async () => {
        await this.nikeElements.getBotaoEstadosUnidos().click();
      }
    );
  }

  async buscarProduto(termo: string): Promise<void> {
    await this.nikeElements.getCampoBusca().fill(termo);
    await this.nikeElements.getCampoBusca().press('Enter');
  }

  async validarResultadoBusca(termo: string): Promise<void> {
    await expect(this.page).toHaveURL(/\/w\?q=/);
    await expect(this.nikeElements.getCardsProduto().first()).toBeVisible();
    await expect(this.nikeElements.getLinkPrimeiroProduto()).toHaveAttribute(
      'aria-label',
      new RegExp(termo, 'i')
    );
  }

  async abrirPrimeiroProduto(): Promise<string> {
    const nome = await this.nikeElements
      .getLinkPrimeiroProduto()
      .getAttribute('aria-label');
    await this.nikeElements.getLinkPrimeiroProduto().click();
    return nome ?? '';
  }

  async validarPaginaProduto(nome: string): Promise<void> {
    await expect(this.page).toHaveURL(/\/t\//);
    await expect(this.nikeElements.getTituloProduto()).toHaveText(nome);
    await expect(this.page.getByText(/^\$\d+/).first()).toBeVisible();
    await expect(this.nikeElements.getGrupoTamanhos()).toBeVisible();
    await expect(this.nikeElements.getOpcoesTamanho().first()).toBeVisible();
  }

  async adicionarSacolaSemTamanho(): Promise<void> {
    await this.nikeElements.getBotaoAdicionarSacola().click();
  }

  async validarMensagemTamanho(): Promise<void> {
    await expect(this.nikeElements.getMensagemSelecioneTamanho()).toBeVisible();
  }
}
