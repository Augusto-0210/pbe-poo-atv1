export class Camera{
    
    //ATRIBUTOS
    private cor: string;
    private tamanho: string;
    private marca: string;

    //CONSTRUTOR
    public constructor(_cor: string, _tamanho:string, _marca: string) {
        this.cor = _cor;
        this.tamanho = _tamanho;
        this.marca = _marca;
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

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }


    //MÉTODOS DIAGRAMA
    public gravar(): void {
        console.log(`A camera ${this.marca} está gravando.`);
    }

    public fotografar():void {
        console.log(`A camera ${this.marca} está fotografando.`);
    }
}