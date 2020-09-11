export default class ArrayLinks{
    constructor(){
        this.links = [];
    }

    criarLink(titulo, endereco){
        const novoLink = new Linki(titulo, endereco);
        this.links.push(novoLink);
    }

    apagarLink(indice){
        this.links.splice(indice,1);
    }

}

class Linki{
    constructor(titulo, endereco){
        this.titulo = titulo;
        this.endereco = endereco;
    }
}