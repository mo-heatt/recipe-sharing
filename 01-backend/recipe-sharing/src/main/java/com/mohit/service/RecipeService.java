package com.mohit.service;

import com.mohit.model.Recipe;
import com.mohit.model.User;

import java.util.List;

public interface RecipeService {
    public Recipe createRecipie(Recipe recipe, User user);
    public Recipe findRecipeById(Long id) throws Exception;
    public void deleteRecipe(Long id) throws Exception;
    public Recipe updateRecipe(Recipe recipe, Long Id) throws Exception;
    public List<Recipe> findAllRecipe();
    public Recipe likeRecipe(Long recipeId, User user) throws Exception;
}
