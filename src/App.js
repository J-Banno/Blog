/*
//     Import
*/
import "./App.css";
import Menu from "./Menu/Menu";
import FormPost from "./Form/Form";
import NewPost from "./Post/Post";
import Footer from "./Footer/Footer";
import { useState } from "react";

/* Content */

const initialArticles =
  // ARTICLE 1 //
  [
    {
      title: "HTML",
      content:
        "L'HyperText Markup Language, HTML, désigne un type de langage informatique descriptif. Il s'agit plus précisément d'un format de données utilisé dans l'univers d'Internet pour la mise en forme des pages Web. Il permet, entre autres, d'écrire de l'hypertexte, mais aussi d'introduire des ressources multimédias dans un contenu. Développé par le W3C (World Wide Web Consortium) et le WHATWG (Web Hypertext Application Technology Working Group), le format ou langage HTML est apparu dans les années 1990. Il a progressivement subi des modifications et propose depuis 2014 une version HTML5 plus aboutie.",
      autor: "John",
      date: "29/12/2021 ",
    },
    // ARTICLE 2 //
    {
      title: "CSS",
      content:
        "Le CSS pour Cascading Style Sheets, est un langage informatique utilisé sur Internet pour la mise en forme de fichiers et de pages HTML. On le traduit en français par feuilles de style en cascade. Apparu dans les années 1990, le CSS se présente comme une alternative à la mise en forme via des balises, notamment HTML. Un peu plus complexe à maîtriser, il permet un gain de temps considérable dans la mise en forme d'une page web par rapport à ces balises. Grâce au CSS, vous pouvez en effet appliquer des règles de mise en forme (titrage, alignement, polices, couleurs, bordures, etc.) à plusieurs documents simultanément.",
      autor: "John",
      date: "29/12/2021 ",
    },
    // ARTICLE 3 //
    {
      title: "JavaScipt",
      content:
        "JavaScript désigne un langage de développement informatique, et plus précisément un langage de script orienté objet. On le retrouve principalement dans les pages Internet. Il permet, entre autres, d'introduire sur une page web ou HTML des petites animations ou des effets.Créé en 1995 par Brendan Eich, en même temps que la technologie Java, le langage JavaScript se distingue des langages serveurs par le fait que l'exécution des tâches est opérée par le navigateur lui-même, sur l'ordinateur de l'utilisateur, et non sur le serveur web. Il s'active donc généralement sur le poste client plutôt que côté serveur.",
      autor: "John",
      date: "29/12/2021 ",
    },
    // ARTICLE 4 //
    {
      title: "React",
      content:
        "React est une librairie Javascript open source développée par Facebook, dont la première release a vu le jour au début de l’année 2013. Aujourd’hui, elle a été mise en place sur des plateformes célèbres telles que Netflix, Yahoo, AirBnb, Sony, Altassian et tout récemment Wordpress. Une des particularités de React est qu’il ne s’occupe que de l’interface de l’application, c’est pourquoi on le qualifie parfois de moteur de rendu Web. En effet, à la différence de son principal concurrent, AngularJS, basé sur un modèle MVW (Model View Whatever) le plus souvent MVC (Model View Controller), React s’occupe essentiellement de la partie Vue.",
      autor: "John",
      date: "29/12/2021 ",
    },
  ];

/****** APP ******/
function App() {
  const [articles, setArticles] = useState(initialArticles);
  ///// FONCTION POST /////
  function posts() {
    return articles.map(function (element) {
      return (
        <NewPost
          title={element.title}
          text={element.content}
          date={element.date}
          autor={element.autor}
        ></NewPost>
      );
    });
  }

  //////// FONCTION METTRE A JOUR VALEUR ////////
  function addArticle(newArticle) {
    setArticles([...articles, newArticle]);
  }

  return (
    <div className="App">
      <Menu />
      {/****** TITRE PRINCIPAL ******/}
      <h1 className="myTitle">DÉVELOPPEMENT FRONT-END</h1>
      {/****** BORDER ******/}
      <div id="root" className="borderTitle"></div>
      {/****** POSTS ******/}
      {posts()}
      {/****** FORMULAIRE ******/}
      <FormPost addArticle={addArticle} />

      <Footer />
    </div>
  );
}

/*
//     Export
*/
export default App;
