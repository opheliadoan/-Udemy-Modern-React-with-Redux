import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a Language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag fr"
          onClick={() => this.context.onLanguageChange("french")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
