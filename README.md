# Fortes Terraplanagem

Landing page pública com apresentação, seis serviços, quatro diferenciais e contatos por WhatsApp. Layout responsivo em preto, prata e laranja, com a marca e as três artes publicitárias fornecidas pelo cliente. O destaque usa a imagem limpa fortes-hero-sem-texto.png, com caminhão e retroescavadeira, ajustada proporcionalmente sem cortes. A galeria permite abrir cada arte completa. As imagens são materiais promocionais, sem confirmação de que representam a frota real.

## Desenvolvimento

Requer Node.js 22 ou superior e Bun. Use o lockfile existente para preservar as versões compatíveis do TanStack.

```sh
bun install --frozen-lockfile
npm run dev
```

`npm run build` gera a aplicação de produção. `npm run lint` executa a verificação de código.

## Edição

- `src/routes/index.tsx`: textos, serviços, diferenciais, contatos e ilustração.
- `src/landing.css`: estilos responsivos da landing page.
- `src/routes/__root.tsx`: idioma e metadados de compartilhamento.

Todos os botões de orçamento abrem o WhatsApp principal, (65) 99948-5776, com a mensagem: “Olá! Gostaria de solicitar um orçamento com a Fortes Terraplanagem.” O contato adicional, (65) 99918-3788, tem seu próprio link na seção de contatos. Não há envio automático de mensagens nem formulário de coleta de dados.

Mantida a estrutura React/TanStack do repositório Lovable. As regras de autenticação e telas internas do sistema de gestão Fortes não se aplicam a esta página pública.

## Lovable

Esta é uma cópia independente da versão Fortes Terraplanagem. O projeto Lovable e o repositório do modelo original permanecem separados. Para publicar pelo Lovable, configure um projeto independente para esta versão.

## Imagens

Os arquivos em public/images são cópias dos materiais fornecidos pelo cliente. A marca é enquadrada pelo CSS, preservando o arquivo original. Para substituir, mantenha os nomes dos arquivos ou atualize as referências em index.tsx e landing.css.
