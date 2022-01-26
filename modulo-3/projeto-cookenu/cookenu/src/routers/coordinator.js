export const goToLogin=(history)=>{
    history.push("/login")
};

export const goToSingUp=(history)=>{
    history.push("/cadastro")
};

export const goToAddRecipes=(history)=>{
    history.push("/adicionar-receita")
};

export const goToRecipesList=(history)=>{
    history.push("/")
};

export const goToRecipesDetail=(history,id)=>{
    history.push(`/detalhe/${id}`)
};