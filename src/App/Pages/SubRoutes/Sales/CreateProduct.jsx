/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Input } from '../../../../components/Input';
import SelectOption from '../../../../components/SelectOption';

const initialState = {
  category: '', name: '', price: '', description: '',
};

const categoryList = [{ name: 'Cloth' }, { name: 'Shoe' }, { name: 'Electronic' }, { name: 'Other' }];

const CreateProduct = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [values, setValues] = useState(initialState);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => console.log(editorState), [editorState]);

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <Input
            inputName="productName"
            placeholder="Type here ...."
            label="Product Name"
            inputType="text"
            inputSize="large"
            changeValue={handleChange}
          />
        </div>
        <div className="col-md-6">
          <Input
            inputName="price"
            placeholder="Type here ...."
            label="Price (USD)"
            inputType="number"
            inputSize="large"
            changeValue={handleChange}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <SelectOption name="category" label="Choose Category" selectElement={handleChange} list={categoryList} />
        </div>
        {values?.category === 'Other' ? (
          <div className="col-md-6">
            <Input
              inputName="other"
              placeholder="Type here ...."
              label="Specify"
              inputType="text"
              inputSize="large"
              changeValue={handleChange}
            />
          </div>
        ) : null}
      </div>
      <div className="mt-3">
        <div>
          <label className="fw-bold mb-2">Description</label>
          <div style={{ border: '1px solid #CED4DA', padding: '2px', minHeight: '300px' }}>
            <Editor editorState={editorState} onEditorStateChange={setEditorState} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
