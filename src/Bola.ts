export class Bola{
    
    //ATRIBUTOS
    private cor: string;
    private tamanho: string;
    private tipo: string;

    //CONSTRUTOR
    public constructor(_cor: string, _tamanho:string, _tipo: string) {
        this.cor = _cor;
        this.tamanho = _tamanho;
        this.tipo = _tipo;
    } 

    //MÉTODOS GET E SET
    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(_tamanho: string): void {
        this.tamanho = _tamanho;
    }
    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(_tipo: string): void {
        this.tipo = _tipo;
    }


    //MÉTODOS DIAGRAMA
    public chutar():void {
        console.log(`chutaram a bola.`); ;
    }

    public jogar():void {
        console.log(`a bola foi jogada.`); ;
    }
}