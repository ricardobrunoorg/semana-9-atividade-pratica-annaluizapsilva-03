const data = {
  produtos: [
    {
      id: 1,
      nome: "Calça Cargo",
      preco: 199.90,
      categoria: "Feminino",
      descricao: "Calça Cargo Estilosa para melhorar o look.",
      emEstoque: true
    },

    {
      id: 2,
      nome: "Vestido Rosa",
      preco: 299.90,
      categoria: "Feminino",
      descricao: "Vestido rosa romântico e elegante para diversas ocasiões.",
      emEstoque: true
    },

    {
      id: 3,
      nome: "Conjunto Blazer Casual",
      preco: 469.90,
      categoria: "Feminino",
      descricao: "Conjunto confortável e estiloso.",
      emEstoque: true
    },

    {
      id: 4,
      nome: "Conjunto Branco",
      preco: 299.90,
      categoria: "Feminino",
      descricao: "Conjunto short e camisa despojado.",
      emEstoque: false
    },

    {
      id: 5,
      nome: "Vestido Festa",
      preco: 89.90,
      categoria: "Feminino",
      descricao: "Vestido festa brilho e elegante.",
      emEstoque: true
    },

    {
      id: 6,
      nome: "Óculos de Sol Vintage",
      preco: 129.90,
      categoria: "Acessórios",
      descricao: "Óculos de Sol Vintage e estiloso",
      emEstoque: true
    },

    {
      id: 7,
      nome: "Óculos de Sol Marilia",
      preco: 109.90,
      categoria: "Acessórios",
      descricao: "Óculos de Sol moderno com acabamento premium.",
      emEstoque: false
    },

    {
      id: 8,
      nome: "Lenço Maria",
      preco: 89.90,
      categoria: "Acessórios",
      descricao: "Lenço estiloso para completar seu look",
      emEstoque: true
    }
  ]
};



document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("search");
  const selectCategory = document.getElementById("category");
  const btnSearch = document.querySelector(".btn-render");
  const products = document.querySelectorAll(".card-produto");
  const btnBanner = document.querySelector(".btn");
function filterProducts() {
    const searchText = searchInput.value.toLowerCase();

    products.forEach((product) => {
      const title = product.querySelector("h3").textContent.toLowerCase();

      if (title.includes(searchText)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }
  btnSearch.addEventListener("click", filterProducts);
  searchInput.addEventListener("keyup", filterProducts);
   btnBanner.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(".catalogo").scrollIntoView({
      behavior: "smooth"
    });
  });
  products.forEach((product) => {
    const btn = product.querySelector("button");

    btn.addEventListener("click", function () {
      alert("Produto adicionado ao carrinho!");
    });
  });

});


  