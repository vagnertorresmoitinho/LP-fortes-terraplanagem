# Fortes Terraplanagem

Site institucional da Fortes Terraplanagem, com desenvolvimento e manutenção pela SCK Soluções. Inclui serviços, diferenciais e orçamento pelo WhatsApp.

## Desenvolvimento

Requer Node.js 22 ou superior e Bun. Preserve as versões do lockfile.

```sh
bun install --frozen-lockfile
npm run dev
npm run build
```

## Arquivos principais

- `src/routes/index.tsx`: conteúdo, contatos e crédito SCK Soluções.
- `src/landing.css`: estilos responsivos.
- `src/routes/__root.tsx`: idioma, metadados e tratamento de erros.
- `public/images/`: materiais visuais fornecidos e imagem editada.

WhatsApp principal: (65) 99948-5776. Adicional: (65) 99918-3788. Os botões apenas abrem a conversa, sem enviar mensagens automaticamente.

## Publicação

O repositório é independente do modelo original. O site hospedado foi importado em outro projeto e não possui sincronização automática comprovada com este repositório. Alterações precisam ser aplicadas e publicadas também no ambiente de hospedagem.

## Direitos e dependências

Consulte `DIREITOS-E-REVISAO.md`. O crédito SCK Soluções identifica o desenvolvimento do site, sem atribuir à empresa a autoria de bibliotecas, fontes, imagens de terceiros ou da plataforma de hospedagem.

A compilação usa diretamente Vite, TanStack Start, React, Tailwind CSS e Nitro. A configuração de publicação é mantida pela SCK Soluções, sem adaptador de plataforma no código.
