import React, {MutableRefObject} from 'react'
import styled from "styled-components"
import {useSearch} from "../../../features/hooks/useSearch"

const InputWrapper = styled.div`
  position: relative;
  margin-right: 1rem;
`

const SearchWrapper = styled.div`
  position: absolute;
  height: 40px;
  width: 300px;
  top: 50%;
  left: 50%;

  .square {
    box-sizing: border-box;
    padding: 0 40px 0 10px;
    width: 300px;
    height: 40px;
    border: 4px solid #000;
    border-radius: 70px;
    background: none;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    outline: 0;
    transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out, padding 0.2s;
    transition-delay: 0.4s, 0s, 0.4s;
    transform: translate(-100%, -50%);
    @media (max-width: 400px) {
      width: 70%;
    }
  }

  .close {
    transition: 0.4s ease-in-out;
    transition-delay: 0.4s;
  }

  .close:before {
    content: "";
    position: absolute;
    width: 27px;
    height: 4px;
    margin-top: -1px;
    margin-left: -13px;
    background-color: #000;
    transform: rotate(45deg);
    transition: 0.2s ease-in-out;
  }

  .close:after {
    content: "";
    position: absolute;
    width: 27px;
    height: 4px;
    background-color: #000;
    margin-top: -1px;
    margin-left: -13px;
    cursor: pointer;
    transform: rotate(-45deg);
  }
`

const InputBase = styled.input`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: 4px solid #000;
  border-radius: 50%;
  background: none;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  outline: 0;
  transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out, padding 0.2s;
  transition-delay: 0.4s;
  transform: translate(-100%, -50%);
  padding-left: 2rem;
`

const ButtonBase = styled.button`
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 40px;
  padding: 0;
  border-radius: 100%;
  outline: 0;
  border: 0;
  color: inherit;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  transform: translate(-100%, -50%);

  :before {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    background-color: #000;
    transform: rotate(45deg);
    margin-top: 20px;
    margin-left: 14px;
    transition: 0.2s ease-in-out;
  }
`

const Input = () => {
  const inputRef = React.useRef() as MutableRefObject<HTMLInputElement>
  const buttonRef = React.useRef() as MutableRefObject<HTMLButtonElement>
  const {search, setSearch} = useSearch()

  const expand = () => {
    if (!inputRef.current.value) {
      inputRef?.current?.classList.toggle("square")
      buttonRef?.current?.classList.toggle("close")
      inputRef?.current?.classList.contains("square") && inputRef.current.focus()
      return
    }
    buttonRef?.current?.classList.contains("close") && (inputRef.current.value = '')
  }

  const onEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current.value.length > 1) {
      setSearch(inputRef.current.value)
    }
  }

  return (
    <InputWrapper>
      <SearchWrapper>
        <InputBase
          ref={inputRef} type="text" name="request" id="search-input"
          defaultValue={search} className={search || inputRef?.current?.value ? "square" : ""}
          placeholder={"Search..."} onKeyDown={onEnterHandler}
        />
        <ButtonBase
          ref={buttonRef} type="reset" id="search-btn"
          className={search || inputRef?.current?.value ? "close" : ""} onClick={expand}
        />
      </SearchWrapper>
    </InputWrapper>
  )
}

export default Input