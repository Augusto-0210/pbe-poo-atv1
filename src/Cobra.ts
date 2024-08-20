export class Cobra{
    
    //ATRIBUTOS
    private tamanho: number;
    private especie: string;
    private cor: string;

    //CONSTRUTOR
    public constructor(_tamanho: number, _especie:string, _cor: string) {
        this.tamanho = _tamanho;
        this.especie = _especie;
        this.cor = _cor;
    } 

    //MÉTODOS GET E SET
    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(_especie: string): void {
        this.especie = _especie;
    }
    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }


    //MÉTODOS DIAGRAMA
    public alimentacao(): void {
        console.log(`A ${this.especie} esta comendo.`);
    }

    public morder():void {
        console.log(`A ${this.especie} esta te mordendo.`);
    }
}