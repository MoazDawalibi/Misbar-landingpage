import { Form, Input } from 'antd'
import React from 'react'
import useFormField from '../../../../Hooks/useFormField';

const Default = ({ name, label, placeholder, isDisabled, onChange, props,inputType }: any) => {
  const { Field, formik, isError, errorMsg, t } = useFormField(name, props);
  
  
  return (
    <div className="TalabeeField">
        <label htmlFor={name} className="text">
          {t(`${label ?  label : name}`)}
        </label>
      <Form.Item
        hasFeedback
        validateStatus={isError ? 'error' : ''}
        help={isError ? t(name)+ ' ' + t('is requierd') : ''}
      >
        <Field
          as={Input}
          type={inputType ? inputType : 'text'}
          placeholder={t(`${placeholder ?placeholder  : name}`)}
          name={name}
          disabled={isDisabled}
        //  onChange={onChange ? onChange : handleChange}
        />
      </Form.Item>
    </div>
  );
};

export default Default;
