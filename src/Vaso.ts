export class Vaso{
    
    //ATRIBUTOS
    private cor: string;
    private tamanho: string;
    private formato: string;

    //CONSTRUTOR
    public constructor(_cor: string, _tamanho:string, _formato: string) {
        this.cor = _cor;
        this.tamanho = _tamanho;
        this.formato = _formato;
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
        return this.formato;
    }

    public setTipo(_formato: string): void {
        this.formato = _formato;
    }


    //MÉTODOS DIAGRAMA
    public plantar(): void {
        console.log(`Plantaram uma planta no vaso ${this.formato}.`);
    }

    public cultivar():void {
        console.log(`Cultivaram a semente no vaso ${this.formato}.`);
    }
}