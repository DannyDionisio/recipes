import React, { FormEvent, useState } from "react";

import "./styles.css";

import BoxContainer from "../../components/BoxContainer";
import PageContainer from "../../components/PageContainer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AddButton from "../../components/AddButton";

import ImageIcon from "../../assets/images/image-icon.svg";

import PreparationSteps, { Step } from "../../components/PreparationSteps";
import api from "../../services/api";
import AddIngredients, { Ingredient } from "../../components/AddIngredients";
import { useHistory } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { addRecipe } from "../../redux/actions/recipeActions";

// Create recipe context

const CreateRecipe = () => {
  //const dispatch = useDispatch();

  let history = useHistory();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [portions, setPortions] = useState("");
  //const [addImage, setAddImage] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [steps, setSteps] = useState<Step[]>([]);
  const [prepTime, setPrepTime] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [blendingMachine, setBlendingMachine] = useState<boolean>(false);
  const [source, setSource] = useState("");
  const [url, setUrl] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    //dispatch(addRecipe());

    api
      .post("recipe", {
        title,
        categoryId: category,
        isForBlendingMachine: blendingMachine,
        portions,
        metadata: {
          source,
          url,
          notes,
        },
        ingredients,
        preparationSteps: steps,

        // image: req.file?.path,

        timing: {
          cooking: totalTime,
          preparation: prepTime,
        },
      })
      .then(() => {
        alert("Recipe created with success!");

        history.push("/recipes");
      })
      .catch(() => {
        alert("Error to create recipe.");
      });
  }

  function handleIngredientsChange(ingredients: Ingredient[]) {
    setIngredients(ingredients);
  }

  function handleStepsChange(steps: Step[]) {
    setSteps(steps);
  }

  return (
    <div>
      <PageContainer>
        <div>
          <h1>Create a recipe</h1>
        </div>

        <BoxContainer>
          <div>
            <form className="form-content" onSubmit={handleSubmit}>
              <Input
                name="recipe-title"
                label="Recipe title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Type the title of the recipe"
              />

              <div className="category__label">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="category__select"
                >
                  <option value="" disabled>
                    Choose a category
                  </option>
                  <option value="6125015d8f886032ebdb4858">Category 1</option>
                  <option value="6125015d8f886032ebdb4858">Category 2</option>
                  <option value="6125015d8f886032ebdb4858">Category 3</option>
                </select>
              </div>

              <Input
                name="portions"
                label="Portions"
                value={portions}
                onChange={(event) => setPortions(event.target.value)}
                placeholder="Number of portions"
              />

              <Input
                name="preparation-time"
                label="Preparation Time"
                type="number"
                value={prepTime}
                placeholder="Preparation Time"
                onChange={(e) => setPrepTime(e.target.value)}
              />

              <Input
                name="total-time"
                label="Total time"
                type="number"
                value={totalTime}
                placeholder="Total time"
                onChange={(e) => setTotalTime(e.target.value)}
              />

              <div className="blending-machine__label">
                <input
                  id="blending-machine"
                  type="checkbox"
                  name="blending-machine"
                  onChange={(event) => setBlendingMachine(!blendingMachine)}
                />
                <label htmlFor="blending-machine">
                  Is it for blending machine?
                </label>
              </div>

              <div className="add-buttons">
                <AddButton source={ImageIcon} title="ADD IMAGE">
                  ADD IMAGE
                </AddButton>

                <AddIngredients onChange={handleIngredientsChange} />

                <PreparationSteps onChange={handleStepsChange} />
              </div>

              <h1 className="recipe-information">Recipe Information</h1>

              <Input
                name="source"
                label="Source"
                placeholder="Type the recipe source"
                value={source}
                onChange={(event) => setSource(event.target.value)}
              />
              <Input
                name="url"
                label="Url"
                type="url"
                placeholder="Type the original recipe url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />

              <div className="notes-box">
                <label>Notes</label>
                <textarea
                  name="notes"
                  className="form-field__textarea"
                  placeholder="Notes about the recipe"
                  rows={4}
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                />
              </div>

              <Button type="submit">Save Recipe</Button>
            </form>
          </div>
        </BoxContainer>
      </PageContainer>
    </div>
  );
};

export default CreateRecipe;
