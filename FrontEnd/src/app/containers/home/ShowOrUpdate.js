import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import LayoutMainWeb from "app/layouts/web";
import BasicInfoCard from "app/components/home/userInputcards/BasicInfoCard";
import EducationInfoCard from "app/components/home/userInputcards/Education";
import { MainContainerWrapper, FormButtons } from "../styles";
import ValidationSchema from "app/utils/ValidationSchema";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
  deleteDataFromLocalStorage,
} from "app/hooks/LocalStorageAPI";
import { useNavigate } from "react-router-dom";

const ShowOrUpdate = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    fullName: "",
    age: "",
    email: "",
    phoneNumber: "",
    gender: "",
    maritalStatus: "",
    location: "",
    nationality: "",
    highestEducationalQualification: "",
    collegeUniversity: "",
    employedIn: "",
    occupation: "",
    countryOfResidence: "",
    annualIncome: "",
    workTravel: "",
    livingWithFamily: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await getDataFromLocalStorage();
        if (storedData) {
          const flattenedData = {
            ...storedData.basicInfo,
            ...storedData.educationInfo,
          };
          setInitialValues(flattenedData);
          setIsEditable(false);
        }
      } catch (error) {
        console.error("Error fetching data from local storage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  const onSubmit = async (values) => {
    const basicInfo = {
      fullName: values.fullName,
      age: values.age,
      email: values.email,
      phoneNumber: values.phoneNumber,
      gender: values.gender,
      maritalStatus: values.maritalStatus,
      location: values.location,
      nationality: values.nationality,
    };

    const educationInfo = {
      highestEducationalQualification: values.highestEducationalQualification,
      collegeUniversity: values.collegeUniversity,
      employedIn: values.employedIn,
      occupation: values.occupation,
      countryOfResidence: values.countryOfResidence,
      annualIncome: values.annualIncome,
      workTravel: values.workTravel,
      livingWithFamily: values.livingWithFamily,
    };

    const body = {
      basicInfo,
      educationInfo,
    };

    try {
      await saveDataToLocalStorage(body);
      setIsEditable(false);
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDataFromLocalStorage();
      setInitialValues({
        fullName: "",
        age: "",
        email: "",
        phoneNumber: "",
        gender: "",
        maritalStatus: "",
        location: "",
        nationality: "",
        highestEducationalQualification: "",
        collegeUniversity: "",
        employedIn: "",
        occupation: "",
        countryOfResidence: "",
        annualIncome: "",
        workTravel: "",
        livingWithFamily: "",
      });
      setCountdown(5);
    } catch (error) {
      console.error("Error deleting data from local storage:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <LayoutMainWeb>
      <MainContainerWrapper>
        <Formik
          key={JSON.stringify(initialValues)}
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ValidationSchema}
          enableReinitialize={true}
        >
          {({ values, setFieldValue }) => (
            <Form className="form__main">
              <BasicInfoCard
                boxShadow={"0px 0px 40px 0px #FFEEC266"}
                isEditable={!isEditable}
              />
              <EducationInfoCard
                boxShadow={"0px 0px 50px 0px #FFB0C44D"}
                isEditable={!isEditable}
              />
              <FormButtons className="form__btns">
                {!isEditable && (
                  <button
                    type="button"
                    onClick={() => setIsEditable(true)}
                    className="edit__btn"
                  >
                    Update
                  </button>
                )}
                {isEditable && (
                  <button className="submit__btn" type="submit">
                    Save
                  </button>
                )}
                <button
                  className="delete__btn"
                  type="button"
                  onClick={handleDelete}
                >
                  {countdown !== null
                    ? `Returning back to home in ${countdown} seconds`
                    : "Delete"}
                </button>
              </FormButtons>
            </Form>
          )}
        </Formik>
      </MainContainerWrapper>
    </LayoutMainWeb>
  );
};

export default ShowOrUpdate;
