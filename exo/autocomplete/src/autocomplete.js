import React from "react";
//import ReactDOM from 'react-dom';
import { AutoComplete } from "@bit/primefaces.primereact.autocomplete";
import PrimereactStyle from "@bit/primefaces.primereact.internal.stylelinks";
import { villes } from "./villes.js";

export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredBrands: null
    };
    this.filterBrands = this.filterBrands.bind(this);
  }

  componentDidMount() {
    //parcour le tableau d'objet json apr un tableau simple de ville
    //	this.villes=villes.map( x=>{ return x.postcode+":"+x.name;} );
  }

  filterBrands(event) {
    setTimeout(() => {
      let results;

      if (event.query.length === 0) {
        results = [...villes];
      } else {
        results = villes.filter(ville => {
          //return ville.toLowerCase().startsWith(event.query.toLowerCase());
          return ville.name
            .toLowerCase()
            .match(new RegExp(event.query.toLowerCase()));
        });
      }
      results = results.map(x => {
        return x.postcode + ":" + x.name;
      });
      console.log(results);
      this.setState({ filteredBrands: results });
    }, 250);
  }
  allinfo() {
    return (
      <div>
        <p
          style={{
            fontFamily: "Open Sans Regular",
            border: "ridge 1px black",
            backgroundColor: "#cadbef",
            borderRadius: "10px"
          }}
        >
          all rigth reserved
        </p>
      </div>
    );
  }
  itemTemplate(brand) {
    return (
      <div className="p-clearfix">
        <div
          style={{ fontSize: "18px", float: "right", margin: "10px 10px 0 0" }}
        >
          {brand}
        </div>
      </div>
    );
  }

  render() {
    let line1 =
      typeof this.state.brand != "undefined"
        ? this.state.brand.split(":")[0]
        : "";
    let line2 =
      typeof this.state.brand != "undefined"
        ? this.state.brand.split(":")[1]
        : "";
    const mystyle = {
      width: "180px",
      height: "100px",
      justifyContent: "center",
      alignItems: "flex-start",
      marginRight: "50px",
      border: "ridge 1px black",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#05ffb0",
      borderRadius: 10
    };
    return (
      <div
        className="content-section implementation"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <PrimereactStyle />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          <h3>Advanced</h3>
          <AutoComplete
            value={this.state.brand}
            suggestions={this.state.filteredBrands}
            completeMethod={this.filterBrands}
            size={30}
            minLength={1}
            placeholder="Hint: type v or f"
            dropdown={true}
            itemTemplate={this.itemTemplate.bind(this)}
            onChange={e => this.setState({ brand: e.value })}
          />{" "}
          {this.allinfo()}
        </div>
        <span style={mystyle}>
          <span>Code postal : {line1 || ""}</span>
          <span> Ville : {line2 || ""}</span>
        </span>
      </div>
    );
  }
}

//export default <Example />;
