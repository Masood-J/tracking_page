import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import StepOne from "@/components/DriverUi/section/StepOne";
import StepTwo from "@/components/DriverUi/section/StepTwo";
import StepThree from "@/components/DriverUi/section/StepThree";
import StepFour from "@/components/DriverUi/section/StepFour";
import StepFive from "@/components/DriverUi/section/StepFive";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Save } from "lucide-react";
import { createContext, useContext } from "react";
export const ContextApi = createContext();
export default function DriverForm({ UpdateProgress, UpdateStep }) {
  const [step, updateStep] = useState(0);
  const steps = [StepOne, StepTwo, StepThree, StepFour, StepFive];
  const StepComponent = steps[step];
  const [nationalities, setNationalities] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://gist.githubusercontent.com/tiveor/5444753e9919ffe74b41/raw/nationalities.json",
        );
        const data = await res.json();

        // Convert to [{value,label}, ...] format
        const formatted = data.map((item) => ({ value: item, label: item }));
        setNationalities(formatted);
      } catch (err) {
        console.error("Error fetching nationalities:", err);
      }
    }
    fetchData();
  }, []);
  const validationSchema = [
    //Step No.1
    Yup.object({
      profilePic: Yup.mixed()
        .required(`Profile Picture is required`)
        .test(
          "fileformat",
          "JPG,PNG up to 5MB",
          (value) => value && ["image/jpeg", "image/png"].includes(value.type),
        ),
      firstName: Yup.string().required(`First name is required`),
      lastName: Yup.string().required(`Last name is required`),
      middleName: Yup.string().notRequired(),
      DOB: Yup.string().required(`DOB is required`),
      National: Yup.string().required(`National is required`),
    }),
    //Step No.2
    Yup.object({
      email: Yup.string().required(`Email is a required`),
      phone: Yup.string().required(`Phone number is required`),
      Address: Yup.string().required(`Address is required`),
      Country: Yup.string().required(`Country is required`),
      State: Yup.string().required(`State is required`),
      City: Yup.string().required(`City is required`),
    }),
    //Step No.3
    Yup.object({
      EmployeeID: Yup.string().required(`Employee ID is required`),
      HireDate: Yup.string().required(`Hire date is required`),
      EmploymentType: Yup.string().required(`Employment type is required`),
      Department: Yup.string().required(`Department type is required`),
      Location: Yup.string(),
      ShiftPattern: Yup.string(),
      Salary: Yup.number(),
    }),
    //Step No.4
    Yup.object({
      License: Yup.number().required(),
      IssueCountry: Yup.string().required(),
      IssueState: Yup.string().required(),
      IssueDate: Yup.string().required(),
      Expiry: Yup.string().required(),
      LicenseImg: Yup.mixed()
        .required()
        .test("fileformat", "PNG,JPG upto 10MB", (value) => {
          if (!value) return true;
          return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
        }),
      VisaType: Yup.string().required(),
      Status: Yup.string().required(),
      VisaIssueCountry: Yup.string(),
      VisaDate: Yup.date().required(),
      VisaExp: Yup.string().required(),
      VisaIMG: Yup.mixed()
        .required()
        .test("fileformat", "Only JPG And PNG Allowed", (value) => {
          if (!value) return true;
          return ["image/jpeg", "image/jpg", "image/png"].includes(value.type);
        }),
      MedicalCertExpiry: Yup.string().required(),
      BloodType: Yup.string(),
      MedicalCertIMG: Yup.mixed()
        .required()
        .test("fileformat", "Only JPG And PNG Allowed", (value) => {
          if (!value) return true;
          return ["image/jpeg", "image/jpg", "image/png"].includes(value.type);
        }),
      ContactName: Yup.string().required(),
      Relationship: Yup.string().required(),
      Phone: Yup.string().required(),
    }),
    //Step No.5
    Yup.object({
      trainings: Yup.array().of(
        Yup.object({
          trainingName: Yup.string().required(`Training Name Is Required`),
          TrainingProvider: Yup.string().required(
            `Training Provider Is Required`,
          ),
          CompleteDate: Yup.string().required(`Complete Date Is Required`),
          ExpiryDate: Yup.string().required(`Expiry Date Is Required`),
          TrainingCertImg: Yup.mixed()
            .required(`You must upload Training Certificate Image`)
            .test(
              "fileformat",
              "Only JPG,PNG or PDF required",
              (value) =>
                value &&
                [
                  "image/jpg",
                  "image/png",
                  "application/pdf",
                  "image/jpeg",
                ].includes(value.type),
            ),
          AddNotes: Yup.string().required(`Please Write Additional Notes`),
        }),
      ),
    }),
  ];
  const IslastStep = step === validationSchema.length - 1;

  return (
    <ContextApi.Provider value={nationalities}>
      <div
        className={`border-l-2 border-r-2 border-b-2 rounded-b-xl border-[#e2e8f0] rounded-t-xl`}
      >
        <Formik
          initialValues={{
            // Step 1
            profilePic: null,
            firstName: "",
            lastName: "",
            middleName: "",
            DOB: "",
            National: "",
            // Step 2
            email: "",
            phone: "",
            Address: "",
            Country: "",
            State: "",
            City: "",
            // Step 3
            EmployeeID: "",
            HireDate: "",
            EmploymentType: "",
            Department: "",
            Location: "",
            ShiftPattern: "",
            Salary: "",
            // Step 4
            License: "",
            IssueCountry: "",
            IssueState: "",
            IssueDate: "",
            Expiry: "",
            LicenseImg: "",
            VisaType: "",
            Status: "",
            VisaIssueCountry: "",
            VisaDate: "",
            VisaExp: "",
            VisaIMG: "",
            MedicalCertExpiry: "",
            BloodType: "",
            MedicalCertIMG: "",
            ContactName: "",
            Relationship: "",
            Phone: "",
            // Step 5
            trainings: [
              {
                trainingName: "",
                TrainingProvider: "",
                CompleteDate: "",
                ExpiryDate: "",
                TrainingCertImg: null,
                AddNotes: "",
              },
            ],
          }}
          validationSchema={validationSchema[step]}
          onSubmit={(value, { setSubmitting }) => {
            if (step < validationSchema.length - 1) {
              UpdateProgress((prevStat) => prevStat + 20);
              updateStep(step + 1);
              UpdateStep((prev) => prev + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
              setSubmitting(false);
              console.log(value);
            } else {
              console.log("Form Submitted Successfully", value);
            }
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ isSubmitting, setFieldValue, values, touched, errors }) => (
            <Form>
              <StepComponent
                setFieldValue={setFieldValue}
                values={values}
                touched={touched}
                errors={errors}
              />
              <div
                className={`border-t-2 border-[#e2e8f0] bg-[#f9fafc] p-6 flex flex-row justify-between gap-5 items-center`}
              >
                <button
                  className={`disabled:opacity-50 border-[#e2e8f0] border-2 rounded-xl p-2 text-gray-600 font-bold`}
                  type="button"
                  disabled={step === 0}
                  onClick={() => {
                    updateStep(step - 1);
                    UpdateProgress((prevStat) => prevStat - 20);
                    UpdateStep((prevState) => prevState - 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div className={`flex flex-row items-center gap-2`}>
                    <ArrowLeft className={`h-4 w-4`}></ArrowLeft>
                    <h3>Previous</h3>
                  </div>
                </button>

                <button
                  className={`text-white font-semibold ${IslastStep ? "bg-[#1ca04c] " : "bg-[#2563eb]"} py-2 pl-3 pr-3 rounded-xl`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  <div className={`flex flex-row items-center gap-2`}>
                    <h3 className={``}>
                      {" "}
                      {IslastStep ? (
                        <div className={`flex flex-row items-center gap-2`}>
                          <Save className={`h-4 w-4`}></Save> Update Driver
                        </div>
                      ) : (
                        "Next"
                      )}
                    </h3>
                    <ArrowRight className={`h-4 w-4`}></ArrowRight>
                  </div>
                </button>
              </div>
              <button
                onClick={() => {
                    if(step<4){
                  updateStep((prev) => prev + 1);
                  UpdateStep((prev) => prev + 1);
                  UpdateProgress((prev) => prev + 20);
                }}}
              >
                Skip Validation
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </ContextApi.Provider>
  );
}
