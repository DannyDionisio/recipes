import React, { FormEvent, useState } from "react";

import "./styles.css";

import BoxContainer from "../../components/BoxContainer";
import PageContainer from "../../components/PageContainer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AddButton from "../../components/AddButton";

import ImageIcon from "../../assets/images/image-icon.svg";

import TimeIcon from "../../assets/images/clock-icon.svg";
import PreparationStep from "../../components/PreparationStep";
import AddIngredient, { Ingredient } from "../../components/AddIngredient";
import api from "../../services/api";

// Create recipe context

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [portions, setPortions] = useState("");
  const [addImage, setAddImage] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const [addPrepTime, setAddPrepTime] = useState("");
  const [addTotalTime, setAddTotalTime] = useState("");
  const [blendingMachine, setBlendingMachine] = useState<boolean>(false);
  const [source, setSource] = useState("");
  const [url, setUrl] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

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

        // image: req.file?.path,
        // isForBlendingMachine, --
        // preparationSteps,
        // timing: {
        //   cooking: timing?.cooking,
        //   preparation: timing?.preparation,
        // },
      })
      .then(() => {
        alert("Receita criada com sucesso!");
      })
      .catch(() => {
        alert("Erro ao criar receita.");
      });
  }

  function handleIngredientsChange(ingredients: Ingredient[]) {
    setIngredients(ingredients);
  }

  return (
    <div>
      <PageContainer>
        <div>
          <h1>Criar uma receita</h1>
        </div>

        <BoxContainer>
          <div>
            <form className="form-content" onSubmit={handleSubmit}>
              <Input
                name="recipe-title"
                label="Título da receita"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Digite o título da receita"
              />

              <div className="category__label">
                <label htmlFor="category">Categoria</label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="category__select"
                >
                  <option value="" disabled>
                    Escolha a categoria
                  </option>
                  <option value="6125015d8f886032ebdb4858">Categoria 1</option>
                  <option value="6125015d8f886032ebdb4858">Categoria 2</option>
                  <option value="6125015d8f886032ebdb4858">Categoria 3</option>
                </select>
              </div>

              <Input
                name="portions"
                label="Porções"
                value={portions}
                onChange={(event) => setPortions(event.target.value)}
                placeholder="Número de porções"
              />

              <div className="blending-machine__label">
                <input
                  id="blending-machine"
                  type="checkbox"
                  name="blending-machine"
                  onChange={(event) => setBlendingMachine(!blendingMachine)}
                />
                <label htmlFor="blending-machine">
                  É para robot de cozinha?
                </label>
              </div>

              <div className="add-buttons">
                <AddButton
                  source={ImageIcon}
                  icon="image-icon"
                  title="ADICIONAR IMAGEM"
                />

                <AddIngredient onChange={handleIngredientsChange} />

                <PreparationStep />

                <AddButton
                  source={TimeIcon}
                  icon="time-icon"
                  title="ADICIONAR TEMPO DE PREPARAÇÃO"
                />

                <AddButton
                  source={TimeIcon}
                  icon="time-icon"
                  title="ADICIONAR TEMPO TOTAL"
                />
              </div>

              <h1 className="recipe-information">Informação da receita</h1>

              <Input
                name="source"
                label="Fonte"
                placeholder="Digite a fonte da receita"
                value={source}
                onChange={(event) => setSource(event.target.value)}
              />
              <Input
                name="url"
                label="Url"
                type="url"
                placeholder="Digite o url da receita"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />

              <div className="notes-box">
                <label>Notas</label>
                <textarea
                  name="notes"
                  className="form-field__textarea"
                  placeholder="Notas sobre a receita"
                  rows={4}
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                />
              </div>

              <Button type="submit">Guardar Receita</Button>
            </form>
          </div>
        </BoxContainer>
      </PageContainer>
    </div>
  );
};

export default CreateRecipe;
