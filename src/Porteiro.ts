export class Porteiro{
    
    //ATRIBUTOS
    private idade: number;
    private altura: string;
    private salario: number;

    //CONSTRUTOR
    public constructor(_idade: number, _altura:string, _salario: number) {
        this.idade = _idade;
        this.altura = _altura;
        this.salario = _salario;
    } 

    //MÉTODOS GET E SET
    public getIdade(): number {
        return this.idade;
    }

    public setIdade(_idade: number): void {
        this.idade = _idade;
    }

    public getAltura(): string {
        return this.altura;
    }

    public setAltura(_altura: string): void {
        this.altura = _altura;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(_salario: number): void {
        this.salario = _salario;
    }


    //MÉTODOS DIAGRAMA
    public recepcao(): void {
        console.log(`O porteiro recepciona os convidados.`);
    }

    public organizar():void {
        console.log(`O porteiro está organizando a entrada.`);
    }
}