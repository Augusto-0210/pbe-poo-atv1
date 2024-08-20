export class Livro{
    
    //ATRIBUTOS
    private autor: string;
    private genero: string;
    private leitor: string;

    //CONSTRUTOR
    public constructor(_autor: string, _genero:string, _leitor: string) {
        this.autor = _autor;
        this.genero = _genero;
        this.leitor = _leitor;
    } 

    //MÉTODOS GET E SET
    public getAutor(): string {
        return this.autor;
    }

    public setAutor(_autor: string): void {
        this.autor = _autor;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(_genero: string): void {
        this.genero = _genero;
    }
    public getLeitor(): string {
        return this.leitor;
    }

    public setLeitor(_leitor: string): void {
        this.leitor = _leitor;
    }


    //MÉTODOS DIAGRAMA
    public ler(): void {
        console.log(`O ${this.leitor} esta lendo.`);
    }

    public escrever():void {
        console.log(`O ${this.autor} esta escrevendo.`);
    }
}