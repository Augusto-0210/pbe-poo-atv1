export class Professor{
    
    //ATRIBUTOS
    private idade: number;
    private disciplina: string;
    private altura: string;

    //CONSTRUTOR
    public constructor(_idade: number, _disciplina:string, _altura: string) {
        this.idade = _idade;
        this.disciplina = _disciplina;
        this.altura = _altura;
    } 

    //MÉTODOS GET E SET
    public getIdade(): number {
        return this.idade;
    }

    public setIdade(_idade: number): void {
        this.idade = _idade;
    }

    public getDisciplina(): string {
        return this.disciplina;
    }

    public setDisciplina(_disciplina: string): void {
        this.disciplina = _disciplina;
    }

    public getAltura(): string {
        return this.altura;
    }

    public setAltura(_altura: string): void {
        this.altura = _altura;
    }


    //MÉTODOS DIAGRAMA
    public aula(): void {
        console.log(`O professor da diciplina ${this.disciplina} está dando aula.`);
    }

    public trabalho():void {
        console.log(`O professor da diciplina ${this.disciplina} passou um trabalho.`);
    }
}