import React from "react";
import Avatar from "antd/es/avatar/index";
import Icon from "antd/es/icon/index";

import Select from "./Components/Select";

import Checkboxes from "./Components/Checkboxes";
import RadioButtons from "./Components/RadioButtons";

import MultiLineInput from "./Components/MultiLineInput";

import DatePicker from "./Components/DatePicker";

import radioButtonIcon from "./CustomIcons/radiobuttonicon";

import multiLineInputIcon from "./CustomIcons/multiLineInputIcon";

function _defaultItems() {
  // deafult sample question
  const questions = {
    es: " Ingrese una pregunta"
  }

  const options = [
    {
      value: "1",
      text: { ...questions }
    }
  ];

  return [
    {
      key: "Select",
      name: "toolbox.select.name", // id of translation
      questions,
      options,
      // description: "toolbox.label.description", // desciption under input on toolbox
      icon: <Avatar icon="down-square" />, // this will go to Dom so can be string|| jsx component
      field_name: "select_", // will add a generated uuidv4
      Component: Select // component not instanciated
    },   
    {
      key: "Checkboxes",
      name: "toolbox.checkboxes.name", // id of translation
      questions,
      options,
      // description: "toolbox.label.description", // desciption under input on toolbox
      icon: <Avatar icon="check-circle" />, // this will go to Dom so can be string|| jsx component
      field_name: "checkboxes_", // will add a generated uuidv4
      Component: Checkboxes // component not instanciated
    },
    {
      key: "RadioButtons",
      name: "toolbox.radiobuttons.name", // id of translation
      questions,
      options,
      // description: "toolbox.label.description", // desciption under input on toolbox
      icon: (
        <Avatar>
          <Icon component={radioButtonIcon} />
        </Avatar>
      ), // this will go to Dom so can be string|| jsx component
      field_name: "radiobuttons_", // will add a generated uuidv4
      Component: RadioButtons // component not instanciated
    },    
    {
      key: "MultiLineInput",
      name: "toolbox.multilineinput.name", // id of translation
      questions,
      // description: "toolbox.textInput.description", // desciption under input on toolbox
      icon: (
        <Avatar>
          <Icon component={multiLineInputIcon} />
        </Avatar>
      ), // this will go to Dom so can be string|| jsx component
      field_name: "multilineinput_", // will add a generated uuidv4
      Component: MultiLineInput // component not instanciated
    },
    {
      key: "DatePicker",
      name: "toolbox.datepicker.name", // id of translation
      questions,
      // description: "toolbox.textInput.description", // desciption under input on toolbox
      icon: <Avatar icon="calendar" />, // this will go to Dom so can be string|| jsx component
      field_name: "datepicker_", // will add a generated uuidv4
      Component: DatePicker // component not instanciated
    }
  ];
}

export default _defaultItems;
