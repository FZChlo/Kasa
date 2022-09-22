// Ajout des imports
import "./RentalTags.scss";
import { Component } from "react";

// Création de l'export class "RentalTags"
export default class RentalTags extends Component {
 render() {
// Qui retourne en HTML une liste non ordonée contenant les tags du "rental"
  return (
   <ul className='tags'>
    {this.props.tags.map((tag, index) => {
						return <li className='tag' key={index}>{tag}</li>;
					})}
   </ul>
  )
 }
}