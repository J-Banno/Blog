// Import form CSS //
import "./form.css";
// Import form STATE //
import { useState } from "react";

//////// FONCTION FORM ///////

function FormPost(props) {
  let [newArticle, setNewArticle] = useState({});

  /******* FONCTION VALUE ****** */
  function changeContent(e) {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  }

  /******* FONCTION VALIDATION FORMULAIRE ****** */
  function validateForm(e) {
    e.preventDefault();
    props.addArticle(newArticle);
    setNewArticle({
      title: "",
      content: "",
      date: "",
      autor: "",
    });
  }

  /******* FORMULAIRE ****** */
  return (
    <form className="formPostContent">
      <h3 className="fromTitle">Créer un nouveau post : </h3>

      {/******* TITRE ****** */}
      <div>
        <label className="inputPost" for="title">
          Titre :{" "}
        </label>
        <input
          onChange={changeContent}
          type="text"
          id="inputTitle"
          name="title"
          placeholder="Titre de l'article..."
          required
          size="50"
          value={newArticle.title}
        ></input>
      </div>

      {/******* POST ****** */}
      <div>
        <label className="inputPost" for="content">
          Poste :{" "}
        </label>
        <textarea
          onChange={changeContent}
          id="textContent"
          name="content"
          placeholder="Votre contenu..."
          required
          rows="12"
          cols="70"
          value={newArticle.content}
        ></textarea>
      </div>

      {/******* AUTEUR ****** */}
      <label className="inputPost" for="autor">
        Auteur :{" "}
      </label>
      <input
        onChange={changeContent}
        type="text"
        id="inputAutor"
        name="autor"
        placeholder="Auteur de l'article..."
        required
        size="16"
        value={newArticle.autor}
      ></input>

      {/******* DATE ****** */}
      <label className="inputPost" for="date">
        Date :{" "}
      </label>
      <input
        onChange={changeContent}
        type="date"
        id="inputDate"
        name="date"
        placeholder=""
        required
        value={newArticle.date}
      ></input>

      {/******* BOUTTON ****** */}
      <input
        onClick={validateForm}
        class="buttonForm"
        type="button"
        value="Valider"
      ></input>
    </form>
  );
}

/////// EXPORT ////////

export default FormPost;
