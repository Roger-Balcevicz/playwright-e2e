# Playwright E2E

teste

## Prova - Nike

Os cenários da prova estão em `src/scenarios/Nike.spec.ts`:

1. Buscar por "air max" e exibir os produtos
1. Abrir um produto a partir da busca (nome, preço e tamanhos)
1. Adicionar na sacola sem escolher o tamanho (mensagem "Please select a size.")

Para rodar só esses testes: `npm run scenario`.

Os testes usam o site oficial global da Nike (https://www.nike.com/). O https://www.nike.com.br/ responde `403 Access Denied` para qualquer navegador automatizado, então não dá para rodar os testes nele.

## GitHub Actions + SonarCloud

[![Build and Tests](https://github.com/ugioni/playwright-e2e/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/playwright-e2e/actions/workflows/node.js.yml)

</br>

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_playwright-e2e&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_playwright-e2e)

## Getting Started

In order to execute this project you must follow the steps below:

1. Install [Node JS](https://nodejs.org/) (version >= 22.x)
1. Run `npm i --save-dev` to install all the project dependencies
1. Run `npx playwright install` to install the browsers used by Playwright
1. Run `npm run ci` to execute the entire test suite
1. Run `npm run show-report` to visualize the reports

All execution artifacts can be found in `./artifacts`, if you want to remove these files run `npm run clean`.

## Using ZeroStep AI
</br>

To use the AI ​​feature with ZeroStep, you must create the `zerostep.config.json` file in the root of the project and add your ZeroStep token.

## Project Structure
</br>
<ul>
    <li>Scenarios: Test scenario mapping</li>
    <li>Support: Project structure files
        <ul>
            <li>Elements: Mapping the elements of each screen</li>
            <li>Fixtures: Data configuration files</li>
            <li>Pages: Logic used to perform actions in tests</li>
        </ul>
    </li>
</ul>
