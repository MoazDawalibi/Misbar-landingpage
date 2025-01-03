import React from "react";
import "./TalabeeField.scss";
import { Date, Time, File, DataRange, SelectField, Default, CheckboxField } from './View';

export interface TalabeeFieldProps {
  name: string;
  type?: "text" | "Select" | "DataRange" | "Date" | "Time" | "File" | "number" | "Checkbox" | "password";
  placeholder?: string;
  label?: string;
  className?: string;
  option?: any[];
  isMulti?: boolean;
  isDisabled?: boolean;
  picker?: "data" | "week" | "month" | "quarter" | "year";
  Format?: "YYYY/MM/DD" | "MM/DD" | "YYYY/MM";
  onChange?: (value: any) => void;
  Group?: boolean
  dir?:'ltr' | "rtl"
  inputType?:String
}

const TalabeeField = (props: TalabeeFieldProps) => {
  switch (props?.type) {
    case 'Select':
      return <SelectField {...props} />;
    case "DataRange":
      return <DataRange {...props} />;
    case "Date":
      return <Date {...props} />;
    case "Time":
      return <Time {...props} />;
    case "File":
      return <File {...props} />;
       case "Checkbox":
      return <CheckboxField {...props} />;
    default:
      return <Default {...props} />;
  }
};

TalabeeField.defaultProps = {
  type: "text",
  className: 'default-class',
  option: [],
  isMulti: false,
  isDisabled: false,
  picker: "date",
  Format: "YYYY/MM/DD",
  onChange: undefined,
  Group:false,
  dir : "ltr",
  inputType: "text"

};

export default TalabeeField;
