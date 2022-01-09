const  buyer = [
    { 
      id:1, 
      nome:"Marcos",
      email:"m@gmail.com",
      senha:"123",
      cidade:"florania",
      bairro:"Flores",
      rua:"qualquer",
      numero:"36"
    }
  ];
  const orders= [
    /* {
      id:3,
      status:"pedido em andamento",
      total:8,
      itens:[
          {iditemPedido:1,nome:" 1kg de pães", valor:5},
          {iditemPedido:2,nome:" 1l de leite", valor:3}
      ],
      tracking:[
        {time: '09:00', title: 'Pedido finalizado',circleSize:16, description:"Pedido finalizado aguarde a separação do estoque",lineWidth:8},
        {title: 'Separação de estoque',circleSize:16, description:"Está quase tudo pronto para a saída do seu pedido!", lineColor:"#D1CACA",lineWidth:8},
        {title: 'Em Transporte',circleSize:16, description:"Seu pedido saiu para a entrega",lineWidth:8,lineColor:"#D1CACA",circleColor:"#D1CACA"},
        {title: 'Entrega realizada',circleSize:16,lineWidth:8,circleColor:"#D1CACA"}
      ]
  }, */
  
  ];
  const lastOrders = [
    /* {
      id:1,
      status:"Pedido Concluído",
      total:8,
      itens:[
          {iditemPedido:1,nome:" 1kg de pães", valor:5},
          {iditemPedido:2,nome:" 1l de leite", valor:3}
      ],
      tracking:[
      {time: '09:27',title: 'Pedido Fechado',circleSize:16,lineWidth:8} 
      ]
  }, */
  
  /* {
      id:2,
      status:"pedido Concluído",
      total:8,
      itens:[
          {iditemPedido:1,nome:" 1kg de carne moida", valor:18},
          {iditemPedido:2 ,nome:" 2kg de peito de frango", valor:12}
      ],
      tracking:[
        {time: '09:27',title: 'Pedido Fechado',circleSize:16,lineWidth:8} 
      ]
  } */
   
  ];
  
  const EstabelecimentoHortiFruit =[
    {
      nome:"hortifruit ",
      image:"data:image/png;base64,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",
      Produtos:[
             {
               idProduto:1, 
               nome:"1 kg de batata doce", 
               qtd:10, 
               preco:2,
               descricao:"Batata doce da terra vinda da serra de santana",
               image:'https://i0.wp.com/chacarastrapasson.com.br/wp-content/uploads/2020/04/batata-doce-rosada.jpg?fit=1200%2C1200&ssl=1'
              },
             {
              idProduto:2, 
              nome:"500g de goiaba", 
              qtd:10, 
              preco:3,
              descricao:"Produto de origem natural sem uso de agrotóxicos", 
              image:'https://static.tuasaude.com/media/article/1b/bc/beneficios-da-goiaba_13191_l.jpg'
            } 
      ]
    },
    {
      nome:"F Frutas",
      image:"https://media.istockphoto.com/photos/composition-with-variety-of-fresh-vegetables-and-fruits-picture-id641799464?k=20&m=641799464&s=612x612&w=0&h=HbOAEnIoc3A1HD0omfnaoAtniGGjhqfFVuxSKxbE4uw=",
      Produtos:[
        {
          idProduto:1, 
          nome:"1 kg de batata doce", 
          qtd:10, 
          preco:7,
          descricao:"Batata doce da terra vinda da serra de santana",
          image:'https://i0.wp.com/chacarastrapasson.com.br/wp-content/uploads/2020/04/batata-doce-rosada.jpg?fit=1200%2C1200&ssl=1'
         },
        {
         idProduto:2, 
         nome:"500g de goiaba", 
         qtd:10, 
         preco:1,
         descricao:"Produto de origem natural sem uso de agrotóxicos", 
         image:'https://static.tuasaude.com/media/article/1b/bc/beneficios-da-goiaba_13191_l.jpg'
       }  
      ]
    }
  
  ]
  
  const EstabelecimentoAcouque =[
    {
      nome:"Carne boa",
      image:"https://img.freepik.com/fotos-gratis/mulher-corte-carne-fresca-em-um-acougue-loja-com-metal-seguranca-malha-luva_1139-1725.jpg?size=626&ext=jpg",
      Produtos:[
        {
          idProduto:1, 
          nome:"1 kg de Carne moida", 
          qtd:10, 
          preco:22,
          descricao:"Produto de origem Bovina",
          image:'https://dourados.saofranciscoonline.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/carne-moida-bovina-2-resfriada-kg-0000000095273.jpg'
        },
        {
          idProduto:2, 
          nome:" 1Kg costela de porco", 
          qtd:10, 
          preco:25, 
          descricao:"Produto de suina",
          image:'http://www.ourodosul.com.br/wp-content/uploads/2019/12/COSTELA-COM-PELE-E-SEM-PELE.png'
        }
      ]
    },
    {
      nome:"Cortes limpos",
      image:"https://thumbs.dreamstime.com/z/imagens-do-alimento-ajustadas-ilustra%C3%A7%C3%B5es-da-carne-cartaz-para-o-a%C3%A7ougue-102379506.jpg",
      Produtos:[
        {
          idProduto:1, 
          nome:"1 kg de Carne moida", 
          qtd:10, 
          preco:25,
          descricao:"Produto de origem Bovina",
          image:'https://dourados.saofranciscoonline.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/carne-moida-bovina-2-resfriada-kg-0000000095273.jpg'
        },
        {
          idProduto:2, 
          nome:" 1Kg costela de porco", 
          qtd:10, 
          preco:18, 
          descricao:"Produto de origem suina",
          image:'http://www.ourodosul.com.br/wp-content/uploads/2019/12/COSTELA-COM-PELE-E-SEM-PELE.png'
        }
      ]
    }
  ]
  
  
  const EstabelecimentoAgua =[
    {
      nome:"L Água",
      image:"data:image/jpeg;base64,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",
      Produtos:[
        {
          idProduto:1, 
          nome:" Galão de Água 20kg", 
          qtd:10, 
          preco:5, 
          descricao:"Agua mineral direto da distribuidora em natal",
          image:'https://www.setegotas.com.br/wp-content/uploads/2017/03/gal%C3%A3o-de-%C3%A1gua-mineral.jpg'
        }
      ]
    },
    {
      nome:"Água da fonte",
      image:"https://pequenosnegocioslucrativos.com.br/wp-content/uploads/2018/01/distribuidora-de-agua-mineral.jpg",
      Produtos:[
        {
          idProduto:2, 
          nome:" Galão de Água 20kg", 
          qtd:10, 
          preco:7, 
          descricao:"Agua mineral direto da distribuidora em móssoro",
          image:'https://www.setegotas.com.br/wp-content/uploads/2017/03/gal%C3%A3o-de-%C3%A1gua-mineral.jpg'
        }
      ]
    }
  
  ]
  
  const EstabelecimentoPadaria =[
    {
      nome:"Bom Sabor",
      image:"https://s2.glbimg.com/2oPON8LcGFGLN93OisHC1szlsB4=/645x388/i.glbimg.com/og/ig/infoglobo1/f/original/2021/01/18/panificacao-analice_paron-12.06.2017.jpg",
      Produtos:[
        {
          idProduto:1, 
          nome:" Pão 500g", 
          qtd:10, 
          preco:2, 
          descricao:" Pão francês",
          image:'http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg'
        },
        {
          idProduto:2, 
          nome:" Bolo de ovos", 
          qtd:10, 
          preco:5, 
          descricao:"Bolo de ovos, contém leite e derivados",
          image:'https://img.itdg.com.br/tdg/images/recipes/000/029/124/320646/320646_original.jpg?mode=crop&width=710&height=400'
        }
      ]
    },
    {
      nome:"Massas 5r",
      image:"https://www.azulis.com.br/wp-content/uploads/2020/05/shutterstock_1658538685.jpg",
      Produtos:[
        {
          idProduto:1, 
          nome:" Pão 500g", 
          qtd:10, 
          preco:1, 
          descricao:" Pão francês",
          image:'http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg'
        },
        {
          idProduto:2, 
          nome:" Bolo de ovos", 
          qtd:10, 
          preco:3, 
          descricao:"Bolo de ovos, contém leite e derivados",
          image:'https://img.itdg.com.br/tdg/images/recipes/000/029/124/320646/320646_original.jpg?mode=crop&width=710&height=400'
        }
      ]
    }
  ]
   
  const EstabelecimentosProximos = [
    {
      id:1,
      nome:"Cortes limpos",
      latitude:-6.1243997508437795,
      longitude:-36.81563728839977,
      image: "https://thumbs.dreamstime.com/z/imagens-do-alimento-ajustadas-ilustra%C3%A7%C3%B5es-da-carne-cartaz-para-o-a%C3%A7ougue-102379506.jpg" ,
      descricao:"Açouque"
    }, 
    {
      id:2,
      nome:"Massas 5r",
      latitude:-6.12476764446574,
      longitude:-36.81586056703807,
      image:'http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg',
      descricao:"Padaria"
    },
    {
      id:3,
      nome:"L Água",
      latitude:-6.125015019842531,
      longitude:-36.816485749151205,
      image: 'https://www.setegotas.com.br/wp-content/uploads/2017/03/gal%C3%A3o-de-%C3%A1gua-mineral.jpg' ,
      descricao:"Venda de água"  
    }
  ]

const Data ={
    buyer,
    orders,
    lastOrders,
    EstabelecimentoHortiFruit,
    EstabelecimentoAcouque,
    EstabelecimentoAgua,
    EstabelecimentoPadaria,
    EstabelecimentosProximos
    
}


export default  Data;