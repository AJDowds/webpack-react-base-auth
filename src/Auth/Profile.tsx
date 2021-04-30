import { selectOrg } from "Features/Organisation/OrganisationSlice"
import { Field, Form, Formik } from "formik"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { selectUser } from "./AuthSlice"

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: lightblue;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
  padding-top: 70px;
`

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 4px;
  position: relative;
`

const DisplayPicWrapper = styled.div`
  display: flex;
  border-radius: 100%;
  background-color: grey;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
`

const UserOrgSection = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 54px;
`

const ProfileForm = styled(Form)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  width: 100%;
  padding: 10px;
`

const MyInput = styled(Field)`
  background-color: white;
  border-radius: 4px;
`

const ProfileButton = styled.button`
  color: grey;
  border: 1px solid grey;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 2px;
`

const EditButton = styled(ProfileButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`

const SaveButton = styled(ProfileButton)<{ editing: boolean }>`
  width: 100px;
  margin-top: 10px;
  background-color: "lightgreen";
  display: ${(props) => (props.editing ? "flex" : "none")};
`

export const Profile: React.FC = (props) => {
  const user = useSelector(selectUser)
  const org = useSelector(selectOrg)
  const [editing, setEditing] = useState(false)

  const saveBasic = (values) => {
    console.log("!!values", values)
  }

  return (
    <PageWrapper>
      <ProfileCard>
        <DisplayPicWrapper>pic</DisplayPicWrapper>

        <EditButton onClick={() => setEditing(!editing)}>
          <h5 style={{ margin: 0 }}>EDIT</h5>
        </EditButton>

        <UserOrgSection>
          <div>
            <strong>{user.username}</strong>
          </div>
          <div style={{ fontSize: 12 }}>{org.name}</div>
        </UserOrgSection>

        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
          }}
          onSubmit={saveBasic}
        >
          {({ errors, touched }) => (
            <ProfileForm>
              <span>
                <strong>First name:</strong>
                <MyInput
                  name="firstname"
                  required
                  placeholder={user.firstname ? user.firstname : "first name"}
                  disabled={!editing}
                />
                {errors.firstname && touched.firstname ? (
                  <div>{errors.firstname}</div>
                ) : null}
              </span>
              <span>
                <strong>Last name:</strong>
                <MyInput
                  name="lastname"
                  required
                  placeholder={user.lastname ? user.lastname : "last name"}
                  disabled={!editing}
                />
                {errors.lastname && touched.lastname ? (
                  <div>{errors.lastname}</div>
                ) : null}
              </span>
              <SaveButton type="submit" editing={editing}>
                Save
              </SaveButton>
            </ProfileForm>
          )}
        </Formik>
      </ProfileCard>
    </PageWrapper>
  )
}
