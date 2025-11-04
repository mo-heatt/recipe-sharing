package com.mohit.controller;

import com.mohit.model.Recipe;
import com.mohit.model.User;
import com.mohit.service.RecipeService;
import com.mohit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @Autowired
    private UserService userService;

    @PostMapping()
    public Recipe createRecipe(@RequestBody Recipe recipe, @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwt(jwt);
        Recipe createdRecipe = recipeService.createRecipie(recipe,user);
        return createdRecipe;
    }

    @GetMapping()
    public List<Recipe> getAllRecipe() throws Exception{
        List<Recipe> recipes = recipeService.findAllRecipe();
        return recipes;
    }

    @DeleteMapping("/{recipeId}")
    public String deleteRecipe(@PathVariable Long recipeId) throws Exception{
        recipeService.deleteRecipe(recipeId);
        return "Recipe deleted Successfully";
    }

    @PostMapping("/{id}")
    public Recipe updateRecipe(Recipe recipe,@PathVariable Long id) throws Exception{
        Recipe updatedRecipe = recipeService.updateRecipe(recipe,id);
        return updatedRecipe;
    }

    @PostMapping("/{id}/like}")
    public Recipe likeRecipe(@PathVariable Long id,@RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwt(jwt);
        Recipe updatedRecipe = recipeService.likeRecipe(id,user);
        return updatedRecipe;
    }
}
