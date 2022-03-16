class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public interoduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`;
      }
  };

  const user1: User= new User ('01', 'eu.prog@labenu.com', 'Prog',"12345")
  console.log (user1)
  console.log(user1.interoduceYourself())