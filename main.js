import { renderizarCatalogo } from "./src/cartaoProduto.js"
import { inicializarCarrinho } from "./src/menuCarrinho.js"
import { renderizarProdutosCarrinho } from "./src/menuCarrinho.js"
import { atualizarPrecoCarrinho } from "./src/menuCarrinho.js"
import { inicializarFiltros } from "./src/filtroCatalogo.js"

renderizarCatalogo()
inicializarCarrinho()
renderizarProdutosCarrinho()
atualizarPrecoCarrinho()
inicializarFiltros()

