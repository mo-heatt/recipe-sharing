package com.mohit.service;

import com.mohit.model.Recipe;
import com.mohit.model.User;
import com.mohit.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeServiceImpl implements RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;

    public Recipe createRecipie(Recipe recipe, User user){
        Recipe createdRecipe = new Recipe();
        createdRecipe.setTitle(recipe.getTitle());
        createdRecipe.setImage(recipe.getImage());
        createdRecipe.setDescription(recipe.getDescription());
        createdRecipe.setUser(user);
        createdRecipe.setCreatedAt(LocalDateTime.now());

        return recipeRepository.save(createdRecipe);
    }

    public Recipe findRecipeById(Long id) throws Exception{
        Optional<Recipe> opt = recipeRepository.findById(id);
        if(opt.isPresent()){
            return opt.get();
        }

        throw new Exception("Recipe not found with this id"+id);
    }

    public void deleteRecipe(Long id) throws Exception{
        findRecipeById(id);
        recipeRepository.deleteById(id);
    }

    public Recipe updateRecipe(Recipe recipe, Long id) throws Exception{
        Recipe oldRecipe = findRecipeById(id);

        if (recipe.getTitle() != null){
            oldRecipe.setTitle(recipe.getTitle());
        }

        if (recipe.getImage() != null){
            oldRecipe.setImage(recipe.getImage());
        }

        if (recipe.getDescription() != null){
            oldRecipe.setDescription(recipe.getDescription());
        }

        return recipeRepository.save(oldRecipe);
    }

    public List<Recipe> findAllRecipe(){
        return recipeRepository.findAll();
    }

    public Recipe likeRecipe(Long recipeId, User user) throws Exception{
        Recipe recipe = findRecipeById(recipeId);
        if (recipe.getLikes().contains(user.getId())){
            recipe.getLikes().remove(user.getId());
        }
        else {
            recipe.getLikes().add(user.getId());
        }
        return recipeRepository.save(recipe);
    }

}
