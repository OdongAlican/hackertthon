/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState, useMemo } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDispatch } from 'react-redux';
import { Input } from '../../../../components/Input';
import SelectOption from '../../../../components/SelectOption';
import { convertImageToBase64 } from '../../../../utils/helpers';
import placeholder from '../../../../utils/images/placeholder.png';
import Button from '../../../../components/Button';
import { updateProduct } from '../../../../actions/products';
import { initialProductState } from '../../../../utils/constants';

const categoryList = [{ name: 'Cloth' }, { name: 'Shoe' }, { name: 'Electronic' }, { name: 'Other' }];

const EditProduct = ({ showFxn, product }) => {
  const [values, setValues] = useState(initialProductState);
  const [image, setImage] = useState('');
  const [imagesArray, setImageArray] = useState([]);
  const [base64Image, setBase64Image] = useState('');

  const dispatch = useDispatch();

  useMemo(() => {
    const productData = {
      category: product?.category,
      name: product?.productname,
      price: product?.productprice,
      description: product?.description,
    };
    setImageArray(JSON.parse(product?.image));
    setValues(productData);
  }, [product]);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const selectedFile = async event => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
    const file = event.currentTarget.files[0];
    const base64File = await convertImageToBase64(file);
    setBase64Image(base64File);
  };

  const submit = () => {
    dispatch(updateProduct({ ...values, image: JSON.stringify(values?.image), id: product?.id }));
    showFxn();
  };

  useEffect(() => {
    if (base64Image) { setImageArray([...imagesArray, base64Image]); }
  }, [base64Image]);

  const removeSelectedImage = index => {
    const res = imagesArray.filter(img => imagesArray.indexOf(img) !== index);
    setImageArray(res);
  };

  useEffect(() => { setValues({ ...values, image: imagesArray }); }, [imagesArray]);
  console.log(product, 'product');

  return (
    <>
      <div className="w-100 d-flex align-items-center mb-4">
        <div className="create-product-container">
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
        <div className="p-2 create-product-photos">
          {imagesArray.map((eachImage, index) => (
            <div key={index}>
              <img
                className="rounded-circle z-depth-2 m-2"
                alt="100x100"
                src={eachImage || placeholder}
                data-holder-rendered="true"
                style={{
                  width: '80px', height: '80px', cursor: 'pointer', border: '1px solid #F6F7FE',
                }}
              />
              <i onClick={() => removeSelectedImage(index)} className="fa fa-times-circle" style={{ marginLeft: '-18px', cursor: 'pointer' }} />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Input
            inputName="name"
            value={values?.name}
            placeholder="Type here ...."
            label="Product Name"
            inputType="text"
            inputSize="large"
            changeValue={handleChange}
          />
        </div>
        <div className="col-md-6">
          <Input
            value={values?.price}
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
          <SelectOption value={values.category} name="category" label="Choose Category" selectElement={handleChange} list={categoryList} />
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
          <textarea value={values.description} className="form-control" rows="3" name="description" onChange={handleChange} />
        </div>
      </div>
      <div className="d-flex mt-3 justify-content-center">
        <div className="w-50 d-flex justify-content-center">
          <div className="px-1">
            <Button clickButton={submit} buttonName="Submit" buttonSize="medium" />
          </div>
          <div className="px-1">
            <Button clickButton={showFxn} buttonName="Cancel" buttonSize="medium" cancel />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
