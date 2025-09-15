import { CircleUser, User } from "lucide-react";
import FormCard from "@/components/DriverUi/ui/FormCard";
import { FileText } from "lucide-react";
import { ErrorMessage, Field } from "formik";
import { Upload } from "lucide-react";
import DateSelect from "@/components/DriverUi/ui/DateSelect";
import PhoneInput from "react-phone-input-2";
import DateSingleSelect from "@/components/DriverUi/ui/DateSingleSelect";
import ReactSelect from "@/components/DriverUi/ui/ReactSelect";
import { ContextApi } from "@/components/DriverUi/section/DriverForm";
import { useContext } from "react";
import React, { useState, useEffect } from "react";
import { GetCountries, GetState } from "react-country-state-city";
import Select from "react-select";
import UploadFiles from "@/components/DriverUi/ui/UploadFiles";
import Image from "next/image";

export default function StepFour({ setFieldValue, values }) {
  const nationalities = useContext(ContextApi);
  const [country, setCountry] = useState(null);
  const [currentState, setcurrentState] = useState(null);
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);
  useEffect(() => {
    if (country)
      GetState(parseInt(country)).then((result) => {
        setStateList(result);
      });
  }, [country]);
  useEffect(() => {
    if (values.IssueCountry?.value) {
      setCountry(values.IssueCountry.value); // keep state in sync with Formik
    }
  }, [values.IssueCountry]);
  const StatusSelect = [
    { value: "active", label: "Active" },
    { value: "expired", label: "Expired" },
  ];
  const VisaTypeOptions = [
    { value: "work", label: "Work" },
    { value: "travel", label: "Travel" },
  ];
  const BloodGroupOptions = [
    { value: 1, label: "A+" },
    { value: 2, label: "A-" },
    { value: 3, label: "B+" },
    { value: 4, label: "B-" },
    { value: 5, label: "AB+" },
    { value: 6, label: "AB-" },
    { value: 7, label: "O+" },
    { value: 8, label: "O-" },
  ];
  return (
    <div>
      <FormCard
        title={`License & Medical`}
        desc={`Driving credentials and health records`}
        icon={<FileText className={`text-white`}></FileText>}
      ></FormCard>

      <div className={`flex flex-col  mt-6 gap-5 pl-8 pr-8 pb-8`}>
        <div className={`flex flex-row items-center gap-2 `}>
          <FileText className={`h-5 w-5 text-blue-500`}></FileText>
          <h3 className={`text-black font-medium text-xl`}>
            Driver License Information
          </h3>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="License" className={`block`}>
              License Number<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="License"
              type="number"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            ></Field>
            <ErrorMessage
              name="License"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
          <div className={`flex-1`}>
            <label htmlFor="IssueCountry" className={`block`}>
              Issuing Country<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="IssueCountry"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
              {({ field, form }) => (
                <Select
                  options={countriesList.map((_country) => ({
                    value: _country.id,
                    label: _country.name,
                  }))}
                  onChange={(e) => {
                    setCountry(e.value);
                    form.setFieldValue(field.name, e.label);
                  }}
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      borderRadius: "10px",
                    }),
                  }}
                  value={
                    countriesList
                      .map((_country) => ({
                        value: _country.id,
                        label: _country.name,
                      }))
                      .find((opt) => opt.label === form.values.IssueCountry) ||
                    null
                  }
                />
              )}
            </Field>
            <ErrorMessage name="IssueCountry" component="span"></ErrorMessage>
          </div>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="IssueState" className={`block`}>
              State/Province<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="IssueState"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
              {({ field, form }) => (
                <Select
                  options={stateList.map((_state) => ({
                    value: _state.id,
                    label: _state.name,
                  }))}
                  onChange={(e) => {
                    setcurrentState(e.value);
                    form.setFieldValue(field.name, e.label);
                  }}
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      borderRadius: "10px",
                    }),
                  }}
                />
              )}
            </Field>
            <ErrorMessage
              name="IssueState"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
          <div className={`flex-1`}>
            <label htmlFor="IssueDate" className={`block`}>
              Issue Date<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="IssueDate"
              className="border flex-wrap border-gray-300 p-2 w-full rounded-xl"
            >
              {({ field, form }) => (
                <DateSingleSelect
                  value={field.value}
                  onChange={(date) => form.setFieldValue(field.name, date)}
                />
              )}
            </Field>
            <ErrorMessage name="IssueDate" component="span"></ErrorMessage>
          </div>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="Expiry" className={`block`}>
              Expiry Date<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="Expiry"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
              {({ field, form }) => (
                <DateSingleSelect
                  value={field.value}
                  onChange={(date) => form.setFieldValue(field.name, date)}
                />
              )}
            </Field>
            <ErrorMessage name="Expiry" component="span"></ErrorMessage>
          </div>
          <div className={`flex-1`}></div>
        </div>
        <div
          className={`flex flex-col gap-2 justify-between w-full text-black`}
        >
          <h3>License Image:</h3>
          <div className={`flex-1 border-[#e2e8f0] rounded-xl border-2 p-4`}>
            <label htmlFor="LicenseImg" className={`block`}></label>
            <Field name="LicenseImg">
              {({ field, form }) => (
                <div className="flex flex-col items-center gap-2">
                  {form.values.LicenseImg ? (
                    <Image
                      src={URL.createObjectURL(form.values.LicenseImg)}
                      alt="License Preview"
                      width={128}
                      height={128}
                      className="object-cover w-32 h-32"
                    />
                  ) : (
                    <div />
                  )}

                  <UploadFiles
                    title="License"
                    onFileChange={(file) =>
                      form.setFieldValue("LicenseImg", file)
                    }
                  />
                </div>
              )}
            </Field>
            <ErrorMessage name="LicenseImg" component="span"></ErrorMessage>
          </div>
        </div>
        <hr />
        <div className={`flex flex-row items-center gap-2 `}>
          <FileText className={`h-5 w-5 text-blue-500`}></FileText>
          <h3 className={`text-black font-medium text-xl`}>Visa Info</h3>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="VisaType" className={`block`}>
              Visa Type<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="VisaType"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
              {({ field, form }) => (
                <ReactSelect
                  options={VisaTypeOptions}
                  value={VisaTypeOptions.find(
                    (option) => option.value === field.value,
                  )}
                  onChange={(option) =>
                    form.setFieldValue(field.name, option.value)
                  }
                />
              )}
            </Field>
            <ErrorMessage
              name="VisaType"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
          <div className={`flex-1`}>
            <label htmlFor="Status" className={`block`}>
              Status<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="Status"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
              {({ field, form }) => (
                <ReactSelect
                  options={StatusSelect}
                  value={StatusSelect.find(
                    (option) => option.value === field.value,
                  )}
                  onChange={(option) =>
                    form.setFieldValue(field.name, option.value)
                  }
                />
              )}
            </Field>
            <ErrorMessage name="Status" component="span"></ErrorMessage>
          </div>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="VisaIssueCountry" className={`block`}>
              Issuing Country<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="VisaIssueCountry"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
              {({ field, form }) => (
                <Select
                  options={countriesList.map((_country) => ({
                    value: _country.id,
                    label: _country.name,
                  }))}
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      borderRadius: "10px",
                    }),
                  }}
                />
              )}
            </Field>
            <ErrorMessage
              name="VisaType"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
          <div className={`flex-1`}>
            <label htmlFor="VisaDate" className={`block`}>
              Issue Date<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="VisaDate"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
              {({ field, form }) => (
                <DateSingleSelect
                  value={field.value}
                  onChange={(date) => form.setFieldValue(field.name, date)}
                ></DateSingleSelect>
              )}
            </Field>
            <ErrorMessage name="VisaDate" component="span"></ErrorMessage>
          </div>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="VisaExp" className={`block`}>
              Expiry Date<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="VisaExp"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
              {({ field, form }) => (
                <DateSingleSelect
                  value={field.value}
                  onChange={(date) => form.setFieldValue(field.name, date)}
                ></DateSingleSelect>
              )}
            </Field>
            <ErrorMessage
              name="VisaExp"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
          <div className={`flex-1`}></div>
        </div>
        <div
          className={`flex flex-col gap-2 justify-between w-full text-black`}
        >
          <h3>Visa Image:</h3>
          <div className={`flex-1 border-[#e2e8f0] rounded-xl border-2 p-4`}>
            <label htmlFor="VisaIMG" className={`block`}></label>
            <Field name="VisaIMG">
              {({ field, form }) => (
                <div className="flex flex-col items-center gap-2">
                  {form.values.VisaIMG ? (
                    <Image
                      src={URL.createObjectURL(form.values.VisaIMG)}
                      alt="License Preview"
                      width={128}
                      height={128}
                      className="object-cover w-32 h-32"
                    />
                  ) : (
                    <div />
                  )}

                  <UploadFiles
                    title="Visa"
                    onFileChange={(file) => form.setFieldValue("VisaIMG", file)}
                  />
                </div>
              )}
            </Field>
            <ErrorMessage name="VisaIMG" component="span"></ErrorMessage>{" "}
          </div>
        </div>
        <hr />
        <div className={`flex flex-row items-center gap-2`}>
          <FileText className={`h-5 w-5 text-green-600`}></FileText>
          <h3 className={`text-black font-medium text-xl`}>
            Medical Information
          </h3>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="MedicalCertExpiry" className={`block`}>
              Medical Certificate Expiry
              <span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="MedicalCertExpiry"
              type="date"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
              {({ field, form }) => (
                <DateSingleSelect
                  value={field.value}
                  onChange={(date) => form.setFieldValue(field.name, date)}
                ></DateSingleSelect>
              )}
            </Field>
            <ErrorMessage
              name="MedicalCertExpiry"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
          <div className={`flex-1`}>
            <label htmlFor="BloodType" className={`block`}>
              Blood Type:
            </label>
            <Field
              name="BloodType"
              className="border min-w-30 border-gray-300 p-2 pb-3 w-full rounded-xl"
            >
              {({ field, form }) => (
                <ReactSelect
                  options={BloodGroupOptions}
                  value={BloodGroupOptions.find(
                    (option) => option.value === field.value,
                  )}
                  onChange={(option) =>
                    form.setFieldValue(field.name, option.value)
                  }
                ></ReactSelect>
              )}
            </Field>
            <ErrorMessage name="BloodType" component="span"></ErrorMessage>
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 justify-between w-full text-black`}
        >
          <h3>Medical Certificate</h3>
          <div className={`flex-1 border-[#e2e8f0] rounded-xl border-2 p-4`}>
            <label htmlFor="MedicalCertIMG" className={`block`}></label>
            <Field name="MedicalCertIMG">
              {({ field, form }) => (
                <div className="flex flex-col items-center gap-2">
                  {form.values.MedicalCertIMG ? (
                    <Image
                      src={URL.createObjectURL(form.values.MedicalCertIMG)}
                      alt="License Preview"
                      width={128}
                      height={128}
                      className="object-cover w-32 h-32"
                    />
                  ) : (
                    <div />
                  )}

                  <UploadFiles
                    title="Medical Certificate"
                    onFileChange={(file) =>
                      form.setFieldValue("MedicalCertIMG", file)
                    }
                  />
                </div>
              )}
            </Field>
            <ErrorMessage
              name="LicenseImg"
              component="span"
            ></ErrorMessage>{" "}
          </div>
        </div>
        <hr />
        <div className={`flex flex-row items-center gap-2`}>
          <User className={`h-5 w-5 text-red-600`}></User>
          <h3 className={`text-black font-medium text-xl`}>
            Emergency Contact
          </h3>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="ContactName" className={`block`}>
              Contact Name<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="ContactName"
              type="text"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            ></Field>
            <ErrorMessage
              name="ContactName"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
          <div className={`flex-1`}>
            <label htmlFor="Relationship" className={`block`}>
              Relationship<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="Relationship"
              type="text"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            ></Field>
            <ErrorMessage name="Relationship" component="span"></ErrorMessage>
          </div>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="Phone" className={`block`}>
              Contact Phone<span className="text-red-500 ml-1">*</span>
            </label>
            <Field name="Phone" className={`min-w-30`}>
              {({ field, form }) => (
                <PhoneInput
                  country={"us"} // default country
                  value={field.value || ""} // bind Formik state
                  onChange={(val) => form.setFieldValue(field.name, val)}
                  inputClass="!w-full !border !border-gray-300 p-5 !rounded-xl "
                  buttonClass="!border-gray-300 !bg-white" // style the flag button
                  containerClass="w-full"
                />
              )}
            </Field>
            <ErrorMessage
              name="Phone"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
          <div className={`sm:flex-1`}></div>
        </div>
      </div>
    </div>
  );
}
