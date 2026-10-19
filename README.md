# PS4 HOST LAB — Firmware Launcher

Uma interface estática em português para GitHub Pages. Permite escolher uma versão de firmware e abrir a rota comunitária correspondente no host upstream PSPULSE.

## Importante: o que este projeto faz (e não faz)

- **Faz:** fornece uma interface própria, responsiva e navegável por controle; roteia o usuário para páginas públicas do host PSPULSE.
- **Não faz:** não contém os binários do exploit/GoldHEN nem é uma cópia offline autônoma do PSPULSE. Os fluxos técnicos são abertos no host upstream.
- O endereço HTTPS do GitHub Pages protege a conexão até esta página. O destino é o host externo indicado no botão.

## Publicar pelo GitHub

1. Crie um repositório público no GitHub, por exemplo `ps4-host-lab`.
2. Envie `index.html`, `style.css`, `app.js` e `README.md` para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha `main` e `/(root)`, depois clique **Save**.
6. Aguarde a publicação. O endereço será `https://SEU-USUARIO.github.io/ps4-host-lab/`.

Guia oficial: https://docs.github.com/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Personalizar

- Edite o título e o texto em `index.html`.
- Altere cores, fontes e layout em `style.css`.
- Altere as rotas de firmware em `app.js`, depois de confirmar as páginas no README upstream.

## Rotas upstream

Este launcher aponta para `https://psx8.github.io/`. Confira sempre as rotas e a compatibilidade no README do projeto:
https://github.com/psx8/psx8.github.io

O projeto PSPULSE exige que os créditos/links de atribuição do autor e da comunidade sejam mantidos ao reutilizar seus materiais. Este launcher não inclui esses materiais técnicos, mas mantém um link para o repositório upstream.

## Segurança e limitações

- Confirme o firmware exato em **Configurações → Sistema → Informações do sistema**.
- Não atualize o firmware apenas para tentar usar um host diferente.
- Não execute arquivos ou payloads de origem desconhecida.
- O jailbreak pode falhar ou travar o navegador; nenhum método tem garantia de funcionamento em toda unidade.
- Este é um projeto independente, não afiliado nem endossado pela Sony Interactive Entertainment.
