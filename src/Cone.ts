export class Cone{
    
    //ATRIBUTOS
    private cor: string;
    private tamanho: string;
    private modelo: string;

    //CONSTRUTOR
    public constructor(_cor: string, _tamanho:string, _modelo: string) {
        this.cor = _cor;
        this.tamanho = _tamanho;
        this.modelo = _modelo;
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

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }


    //MÉTODOS DIAGRAMA
    public sinalizar(): void {
        console.log(`O cone ${this.modelo} está sinalizando algo.`);
    }

    public barrar():void {
        console.log(`O cone ${this.modelo} está barrando a passagem.`);
    }
}