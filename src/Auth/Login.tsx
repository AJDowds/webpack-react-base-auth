import React, { useEffect, useRef, useState } from "react"
import { Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { login } from "./AuthSlice"
import "./Auth.module.css"
import { useHistory } from "react-router-dom"
import { RootState } from "store/store"

const LoginWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginForm = styled.div`
  height: 100%;
  width: 100%;

  margin: auto;
  border: 1px solid #4b4848;
  background-color: grey;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  ${(props) =>
    props.theme.desktop &&
    `
    border-radius: 4px;
    min-width: 375px;
    min-height: 380px;
    width: 20%;
    height: 30%;
  `}
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`

const FieldLabel = styled.h6`
  text-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
`

const Field = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;

  &:focus {
    outline: none;
  }
`

const SubmitButton = styled.button`
  background-color: #2e8a2e;
  border: none;
  border-radius: 4px;
  padding: 10px;
  width: 50%;
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
`

export const Login: React.FC = (props) => {
  const auth = useSelector((state: RootState) => state.auth)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()
  const inputRef = useRef(document.createElement("input"))

  useEffect(() => {
    inputRef.current.focus()
  }, [inputRef.current])

  useEffect(() => {
    if (auth.username) {
      history.push("/calendar")
    }
  }, [auth])

  const handleSubmit = () => {
    dispatch(login({ UserName: username, Password: password }))
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  return (
    <LoginWrapper>
      <LoginForm>
        <FormGroup>
          <FieldLabel>Username</FieldLabel>
          <Field
            ref={inputRef}
            type="text"
            placeholder="Username"
            onKeyDown={handleKeyDown}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </FormGroup>

        <FormGroup>
          <FieldLabel>Password</FieldLabel>
          <Field
            type="password"
            placeholder="Password"
            onKeyDown={handleKeyDown}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </LoginForm>
    </LoginWrapper>
  )
}
