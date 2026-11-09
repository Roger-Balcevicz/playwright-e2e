import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class NikeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getDialogLocalizacao(): Locator {
    return this.page.getByRole('dialog', {
      name: /Deseja atualizar seu local/
    });
  }

  getBotaoEstadosUnidos(): Locator {
    return this.getDialogLocalizacao().getByRole('button', {
      name: 'United States',
      exact: true
    });
  }

  getCampoBusca(): Locator {
    return this.page.getByRole('searchbox', { name: 'Search Products' });
  }

  getCardsProduto(): Locator {
    return this.page.getByTestId('product-card');
  }

  getLinkPrimeiroProduto(): Locator {
    return this.getCardsProduto()
      .first()
      .getByTestId('product-card__img-link-overlay');
  }

  getTituloProduto(): Locator {
    return this.page.getByRole('heading', { level: 1 });
  }

  getGrupoTamanhos(): Locator {
    return this.page.getByRole('group', { name: /Select Size/ });
  }

  getOpcoesTamanho(): Locator {
    return this.getGrupoTamanhos().getByRole('radio');
  }

  getBotaoAdicionarSacola(): Locator {
    return this.page.getByRole('button', { name: 'Add to Bag' });
  }

  getMensagemSelecioneTamanho(): Locator {
    return this.page.getByText('Please select a size.');
  }
}
