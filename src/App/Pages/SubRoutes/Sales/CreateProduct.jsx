/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
// import { Editor } from 'react-draft-wysiwyg';
// import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Input } from '../../../../components/Input';
import SelectOption from '../../../../components/SelectOption';
import { convertImageToBase64 } from '../../../../utils/helpers';
import placeholder from '../../../../utils/images/placeholder.png';

const initialState = {
  category: '', name: '', price: '', description: '',
};

const categoryList = [{ name: 'Cloth' }, { name: 'Shoe' }, { name: 'Electronic' }, { name: 'Other' }];

const CreateProduct = () => {
  // const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [values, setValues] = useState(initialState);
  const [image, setImage] = useState('');

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  // useEffect(() => console.log(editorState), [editorState]);

  const selectedFile = async event => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
    const file = event.currentTarget.files[0];
    const base64File = await convertImageToBase64(file);
    console.log('image_b64', base64File);
  };

  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center bg-info">
        <div className="bg-warning" style={{ position: 'relative' }}>
          <div
            className="settings-image-background text-white d-flex align-items-center justify-content-center"
            style={{
              position: 'absolute', left: '0', right: '0', marginLeft: 'auto', top: '0', marginTop: '50px', bottom: '0', marginBottom: 'auto', marginRight: 'auto', width: '40px', height: '40px', borderRadius: '50%',
            }}
          >
            <i className="fas fa-camera text-white" style={{ fontSize: '20px', cursor: 'pointer', position: 'relative' }}>
              <input type="file" className="file-upload-input" data-toggle="tooltip" data-placement="bottom" title="Upload Photo" onChange={e => selectedFile(e)} />
            </i>
          </div>
          <img className="rounded-circle z-depth-2" alt="100x100" src={image || placeholder} data-holder-rendered="true" style={{ width: '150px', height: '150px', cursor: 'pointer' }} />
        </div>
      </div>
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
          <textarea className="form-control" rows="4" />
          {/* <div style={{ border: '1px solid #CED4DA', padding: '2px', minHeight: '200px' }}> */}
          {/* <Editor editorState={editorState} onEditorStateChange={setEditorState} /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
