import { useState, useEffect } from "react";
import StyledAddProduct from "./AddProduct.style";
import AddProductHead from "./AddProductHead";
import Label from "./Label";
import FileInput from "./FileInput";
import InputField from "./InputField";
import Textarea from "./Textarea";
import TagList from "./TagList";

const AddProduct = () => {
  const [values, setValues] = useState({
    imgFile: null,
    name: "",
    description: "",
    price: "",
    tags: [],
  });

  const [tagInputValue, setTagInputValue] = useState(""); // tag input의 value를 저장할 state

  const isSubmitDisabled =
    values.name.trim() !== "" &&
    values.description.trim() !== "" &&
    values.price.trim() !== "" &&
    values.tags.length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleFileChange(name, value);
  };

  const handleFileChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 상품 가격 3자리마다 콤마 추가, 모바일에서 text 입력되는 경우도 해결
  const onInput = (e) => {
    const onlyDigits = e.target.value.replace(/[^0-9]/g, "");
    const formattedValue = onlyDigits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    e.target.value = formattedValue;
  };

  // tag input에 value 값 저장
  const onChange = (e) => {
    setTagInputValue(e.target.value);
  };

  // 빈 값으로 엔터키 입력 시, return
  // tag input의 value 값을 tags 배열에 추가
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value.trim() === "") {
        return;
      }

      setValues((prevValues) => ({
        ...prevValues,
        tags: [...prevValues.tags, tagInputValue],
      }));
      setTagInputValue("");
    }
  };

  // tag 삭제
  const handleDeleteClick = (tagIdx) => {
    setValues((prevValues) => ({
      ...prevValues,
      tags: prevValues.tags.filter((_, idx) => idx !== tagIdx), // tag 삭제
    }));
  };

  return (
    <StyledAddProduct>
      <AddProductHead disabled={!isSubmitDisabled} />

      <Label htmlFor="productImg">상품 이미지</Label>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleFileChange}
      />

      <Label htmlFor="name">상품명</Label>
      <InputField
        name="name"
        id="name"
        type="text"
        htmlForId="productName"
        value={values.name}
        placeholder="상품명을 입력해주세요"
        onChange={handleChange}
      />

      <Label htmlFor="description">상품 소개</Label>
      <Textarea
        name="description"
        id="description"
        value={values.description}
        placeholder="상품 소개를 입력해주세요"
        onChange={handleChange}
      />

      <Label htmlFor="price">판매가격</Label>
      <InputField
        name="price"
        id="price"
        htmlForId="price"
        type="text"
        value={values.price}
        placeholder="판매 가격을 입력해주세요"
        onChange={handleChange}
        onInput={onInput}
      />

      <Label htmlFor="tags">태그</Label>
      <InputField
        name="tags"
        id="tags"
        type="text"
        value={tagInputValue}
        placeholder="태그를 입력해주세요"
        onKeyDown={onKeyDown}
        onChange={onChange}
      />

      <TagList
        tagsLength={values.tags.length}
        tags={values.tags}
        onClick={handleDeleteClick}
      />
    </StyledAddProduct>
  );
};

export default AddProduct;
