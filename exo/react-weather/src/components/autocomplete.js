import React from "react";
import { AutoComplete } from "@bit/primefaces.primereact.autocomplete";
import {
  CircularProgress,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  Tooltip,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
class Autocomplete extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredBrands: null
    };
    this.filterBrands = this.filterBrands.bind(this);
  }

  componentDidMount() {
    this.brands = [
      "Audi",
      "BMW",
      "Fiat",
      "Ford",
      "Honda",
      "Jaguar",
      "Mercedes",
      "Renault",
      "Volvo"
    ];
  }

  filterBrands(event) {
    setTimeout(() => {
      let results;

      if (event.query.length === 0) {
        results = [...this.brands];
      } else {
        results = this.brands.filter(brand => {
          return brand.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }

      this.setState({ filteredBrands: results });
    }, 250);
  }

  itemTemplate(brand) {
    return (
      <div className="p-clearfix">
        <img
          alt={brand}
          src={`https://raw.githubusercontent.com/primefaces/primereact/master/public/showcase/resources/demo/images/car/${brand}.png`}
          style={{
            width: "32px",
            display: "inline-block",
            margin: "5px 0 2px 5px"
          }}
        />
        <div
          style={{ fontSize: "18px", float: "right", margin: "10px 10px 0 0" }}
        >
          {brand}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="content-section implementation">
        <PrimereactStyle />
        <h3>Advanced</h3>
        <AutoComplete value={this.state.brand} />
        <span style={{ marginLeft: "50px" }}>
          Brand: {this.state.brand || "none"}
        </span>
      </div>
    );
  }
}

export default <Autocompletion />;
