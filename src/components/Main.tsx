export default function Main() {
  const ingredients = ["orange", "mango", "apple"];

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  function handleSubmit() {
    console.log("Form submitted!");
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  );
}
