import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import Data from './data';


interface Track {
  time:string,
  title: string,
  circleSize:number,
  lineWidth:number
}


@Controller()
export class AppController {
  _ids= 1;
  _idsOrder=5;

  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/registerBuyer')
  registerBuyer(@Body ()body){
    body.id =this._ids+1;
    this._ids=+1
    Data.buyer.push(body)
  }

  @Get('/all')
  all(){
    return Data.buyer;
  }

  @Post('/login')
  login(@Body() body){
    console.log(body)
    let login ={logged:false}
    let user = {}
    Data.buyer.forEach(function(el, i){
      if(el.email == body.email && el.senha == body.senha) {
        login = {logged:true};
        user = el 
      }
  });
     return [login,user];
     
  }

  @Post('/editdata')
   editdata(@Body() body){
    const user =  this.serachBuyer(body.id)
    const index = Data.buyer.indexOf(user)
    if(user){
      const newData={
        id:body.id,
        nome:body.nome,
        email:body.email,
        senha:user.senha,
        cidade: body.cidade,
        bairro: body.bairro,
        rua:body.rua
      }

      Data.buyer[index]= newData
    }
  }
  @Get('/openOrders')
  openOrders(){
    return Data.orders
  }

  @Get('/lastOrders')
  lastOrders(){
    return Data.lastOrders
  }

  @Post("/confirmReceived")
  confirm(@Body() body){
     Data.orders.forEach(function(element:any,index:number){
         if(element.id == body.id){
           element.tracking= []
           var data= new Date();
           var hora =data.getHours()
           var minutes =data.getMinutes()
           var str_hora = hora + ':' + minutes
            element.status ="pedido Concluído"
            element.tracking = [{time: str_hora,title: 'Pedido Fechado',circleSize:16,lineWidth:8}]

            console.log(element)
            Data.lastOrders.push(element)
            Data.orders.splice(index,1);
         }
     })
  }

  @Post('/order')
  order(@Body() body){
    body.id = this._idsOrder+1
    this._idsOrder +=1
    body.status ="pedido em andamento"
    var data= new Date();
    var hora =data.getHours()
    var minutes =data.getMinutes()
    var str_hora = hora + ':' + minutes
    body.tracking= [
      {time: str_hora, title: 'Pedido finalizado',circleSize:16, description:"Pedido finalizado aguarde a separação do estoque",lineWidth:8},
      {title: 'Separação de estoque',circleSize:16, description:"Está quase tudo pronto para a saída do seu pedido!", lineColor:"#D1CACA",lineWidth:8},
      {title: 'Em Transporte',circleSize:16, description:"Seu pedido saiu para a entrega",lineWidth:8,lineColor:"#D1CACA",circleColor:"#D1CACA"},
      {title: 'Entrega realizada',circleSize:16,lineWidth:8,circleColor:"#D1CACA"}
    ]

    Data.orders.push(body)
  }

  @Get('/nextEstabilish')
   next(){
     return Data.EstabelecimentosProximos;
   }

  @Get('/hortiFruit')
   hortiFruit(){
      return Data.EstabelecimentoHortiFruit;
   }

   @Get('/acouque')
   acouque(){
      return Data.EstabelecimentoAcouque;
   }
   
   @Get('/agua')
   agua(){
      return Data.EstabelecimentoAgua;
   }
  
   @Get('/padaria')
   padaria(){
      return Data.EstabelecimentoPadaria;
   }


  serachBuyer(id){
    let user= null;
    Data.buyer.forEach(function(element,i){
      if(element.id == id){
        user= element;
      }
    })
    return user;
  }
}
