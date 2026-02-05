# 🔧 Guia de Manutenção - Página History

## 📋 Estrutura da Página

A página `/history` utiliza um sistema de abas (tabs) que permite alternar entre 6 seções diferentes de forma dinâmica.

### Como Funciona

```tsx
const [activeSection, setActiveSection] = useState<string>("historia");
```

- **Estado**: Controla qual seção está sendo exibida
- **Abas**: Botões com ícones que mudam o estado
- **Conteúdo**: Renderizado condicionalmente baseado no estado ativo

## 📝 Como Editar Conteúdo

### 1. **Editar Textos Diretamente**

Os conteúdos estão definidos como objetos no topo do componente:

```tsx
const historiContent = {
  anos: "18 Anos de Tradição",
  titulo: "Com 18 anos de dedicação...",
  descricao: "Combinando sabores clássicos..."
};
```

Para alterar um texto, edite o valor correspondente.

### 2. **Editar Imagens e Vídeos**

Os caminhos das mídia são referenciados assim:

```tsx
<img src="/images/hitoria/chef.png" alt="Chef" />
<video src="/images/hitoria/ambientes.mp4" controls />
```

Para usar novas imagens:
1. Coloque na pasta `/client/public/images/hitoria/`
2. Atualize o caminho no componente
3. Mantenha os nomes descritivos

### 3. **Usando o Arquivo JSON (Opcional)**

Você pode mover para `historia_data.json` para facilitar gerenciamento:

```tsx
const [historyData, setHistoryData] = useState({});

useEffect(() => {
  fetch("/historia_data.json")
    .then(res => res.json())
    .then(data => setHistoryData(data));
}, []);

const historiContent = historyData.historia || {};
```

## 🎨 Como Personalizar Estilos

### Cores
Se quiser mudar a paleta de cores, procure por:
- `#D4AF37` - Gold (accent)
- `#1a1a1a` - Dark background
- `#2C1810` - Card background
- `#5C4033` - Borders

### Fonts
As fontes usam as classes do Tailwind, ajuste em `index.css` se precisar mudar.

### Espaçamentos
Use as classes Tailwind (`p-12`, `mb-6`, etc.) para ajustar margens e padding.

## 🔄 Como Adicionar Uma Nova Seção

### Passo 1: Adicione à Lista de Seções
```tsx
const sections = [
  // ... seções existentes
  { id: "nova", label: "Nova Seção", icon: "🎭" },
];
```

### Passo 2: Crie o Objeto de Conteúdo
```tsx
const novaContent = {
  titulo: "Título da Seção",
  descricao: "Descrição...",
  // ... outros campos
};
```

### Passo 3: Adicione a Seção de Renderização
```tsx
{activeSection === "nova" && (
  <div className="animate-fadeIn">
    <div className="bg-gradient-to-r from-[#2C1810] to-[#3d2415] border border-[#5C4033] rounded-xl p-12">
      {/* Conteúdo aqui */}
    </div>
  </div>
)}
```

## 🎬 Adicionar Vídeo

```tsx
<video
  src="/images/hitoria/seu-video.mp4"
  controls
  className="w-full h-full object-cover"
  poster="/images/seu-poster.jpg"
/>
```

**Formatos suportados:** MP4, WebM, Ogg

## 🖼️ Adicionar Imagem

```tsx
<img
  src="/images/hitoria/sua-imagem.png"
  alt="Descrição"
  className="w-full h-auto rounded-lg border border-[#5C4033]"
/>
```

**Formatos suportados:** PNG, JPG, JPEG, WebP

## 🔍 Verificar se Está Funcionando

1. Acesse http://localhost:5173/history
2. Clique em cada aba para verificar se o conteúdo carrega
3. Teste em mobile para ver responsividade
4. Verifique se imagens/vídeos carregam corretamente

## 🐛 Troubleshooting

### Imagens não carregam
- Verifique se o caminho está correto
- Confirme que o arquivo existe em `/public/images/hitoria/`
- Use caminhos absolutos começando com `/images/`

### Vídeo não funciona
- Confira o formato (deve ser MP4 com codec H.264)
- Teste em um player online primeiro
- Verifique permissões do arquivo

### Aba não troca de conteúdo
- Verifique se o `id` da seção corresponde à condição `activeSection === "id"`
- Confirme que o estado está sendo atualizado com `setActiveSection`

### Estilos não aplicam
- Limpe o cache do navegador (Ctrl+F5)
- Recompile com `npm run build`
- Verifique se as classes Tailwind estão correctas

## 📱 Responsividade

A página é 100% responsiva:

| Device | Layout |
|--------|--------|
| Mobile | Abas em 2 colunas |
| Tablet | Abas em 3 colunas |
| Desktop | Abas em 6 colunas |

Para testar: abra DevTools (F12) → Toggle device toolbar

## 🚀 Deploy

Antes de fazer deploy:

1. Execute `npm run build` para verificar erros
2. Teste em produção localmente: `npm run preview`
3. Confirme que todas as imagens carregam
4. Teste as abas funcionam corretamente
5. Verifique links e CTAs

## 📊 Performance

Otimizações já implementadas:
- ✅ Lazy loading de imagens
- ✅ CSS animations otimizadas
- ✅ Sem re-renders desnecessários
- ✅ Código TypeScript tipado

## 📞 Suporte

Se encontrar problemas:
1. Verifique o console do navegador (F12)
2. Procure por mensagens de erro em vermelho
3. Teste em incógnito (sem cache)
4. Contacte Essencial Comunicação se persistir

---

**Última atualização:** 04/02/2026
**Versão:** 1.0
**Status:** ✅ Production Ready
