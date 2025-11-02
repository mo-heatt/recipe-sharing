package com.mohit.controller;

import com.mohit.model.Recipe;
import com.mohit.model.User;
import com.mohit.service.RecipeService;
import com.mohit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @Autowired
    private UserService userService;

    @PostMapping("/api/recipe/user/{userId}")
    public Recipe createRecipe(@RequestBody Recipe recipe, @PathVariable Long userId) throws Exception{
        User user = userService.findUserById(userId);
        Recipe createdRecipe = recipeService.createRecipie(recipe,user);
        return createdRecipe;
    }

    @GetMapping("/api/recipe")
    public List<Recipe> getAllRecipe() throws Exception{
        List<Recipe> recipes = recipeService.findAllRecipe();
        return recipes;
    }

    @DeleteMapping("/api/recipe/{recipeId}")
    public String deleteRecipe(@PathVariable Long recipeId) throws Exception{
        recipeService.deleteRecipe(recipeId);
        return "Recipe deleted Successfully";
    }

    @PostMapping("api/recipe/{id}")
    public Recipe updateRecipe(Recipe recipe,@PathVariable Long id) throws Exception{
        Recipe updatedRecipe = recipeService.updateRecipe(recipe,id);
        return updatedRecipe;
    }

    @PostMapping("/api/recipe/{id}/user/{userId}")
    public Recipe likeRecipe(@PathVariable Long id,@PathVariable Long userId) throws Exception{
        User user = userService.findUserById(userId);
        Recipe updatedRecipe = recipeService.likeRecipe(id,user);
        return updatedRecipe;
    }
}
