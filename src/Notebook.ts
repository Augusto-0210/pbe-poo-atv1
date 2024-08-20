export class Notebook{
    
    //ATRIBUTOS
    private marca: string;
    private cor: string;
    private tamanho: string;

    //CONSTRUTOR
    public constructor(_marca: string, _cor:string, _tamanho: string) {
        this.marca = _marca;
        this.cor = _cor;
        this.tamanho = _tamanho;
    } 

    //MÉTODOS GET E SET
    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

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


    //MÉTODOS DIAGRAMA
    public pesquisar():void {
        console.log(`pesquisando...`); ;
    }

    public estudar():void {
        console.log(`estudando...`); ;
    }
}