export class Tijolo{
    
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
    public construir(): void {
        console.log(`Utilizaram o tijolo ${this.tipo} para contruir uma casa.`);
    }

    public jogar():void {
        console.log(`Utilizaram o tijolo ${this.tipo} para jogar em uma pessoa.`);
    }
}