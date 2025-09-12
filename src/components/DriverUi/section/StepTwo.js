import { User } from "lucide-react";
import FormCard from "@/components/DriverUi/ui/FormCard";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MapPin } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import React, { useState, useEffect } from "react";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
import Select from "react-select";
export default function StepTwo() {
  const [country, setCountry] = useState(null);
  const [currentState, setcurrentState] = useState(null);
  const [city, setCity] = useState(null);
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
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
    if (currentState)
      GetCity(parseInt(country), parseInt(currentState)).then((result) => {
        setCitiesList(result);
      });
  }, [currentState]);
  return (
    <div>
      <FormCard
        title={`Address & Contact`}
        desc={`Location and Communication Information`}
        icon={<MapPin className={`text-white`}></MapPin>}
      ></FormCard>
      <div className={`flex flex-col items-center mt-6 gap-5 p-8`}>
        <div
          className={`flex flex-row gap-2 flex-wrap justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="email" className={`block`}>
              Email Address<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="email"
              type="text"
              className="border border-gray-300 p-2 w-full rounded-xl min-w-30"
            ></Field>
            <ErrorMessage
              name="email"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
          <div className={`flex-1`}>
            <label htmlFor="phone" className={`block`}>
              Phone Number<span className="text-red-500 ml-1">*</span>
            </label>
            <Field name="phone" className={`min-w-30`}>
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
            <ErrorMessage name="phone" component="span"></ErrorMessage>
          </div>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="alt_phone" className={`block`}>
              Alternate Phone:
            </label>
            <Field
              name="alt_phone"
              className="border border-gray-300 p-2 w-full rounded-xl"
            >
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
              name="alt_phone"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="Address" className={`block`}>
              Street Address<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="Address"
              type="text"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            ></Field>
            <ErrorMessage
              name="Address"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="Country" className={`block`}>
              Country<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="Country"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
                {({ field, form }) => (
                    <Select
                        options={countriesList.map((_country) => ({
                            value: _country.id,
                            label: _country.name,
                        }))}
                        onChange={(e) => setCountry(e.value)}
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
              name="Country"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
          <div className={`flex-1`}>
            <label htmlFor="State" className={`block`}>
              State/Province<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="State"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
                {({ field, form }) => (
                    <Select
                        options={stateList.map((_state) => ({
                            value: _state.id,
                            label: _state.name,
                        }))}
                        onChange={(e) => setcurrentState(e.value)}
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderRadius: "10px",
                            }),
                        }}
                    />
                )}
            </Field>
            <ErrorMessage name="State" component="span"></ErrorMessage>
          </div>
        </div>
        <div
          className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}
        >
          <div className={`flex-1`}>
            <label htmlFor="City" className={`block`}>
              City<span className="text-red-500 ml-1">*</span>
            </label>
            <Field
              name="City"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
            >
                {({ field, form }) => (
                    <Select
                        options={citiesList.map((_city) => ({
                            value: _city.id,
                            label: _city.name,
                        }))}
                        onChange={(e) => setCity(e.value)}
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
              name="City"
              component="span"
              className={`text-red-700`}
            ></ErrorMessage>
          </div>
          <div className={`flex-1`}>
            <label htmlFor="ZIP" className={`block`}>
              ZIP/Postal Code:
            </label>
            <Field
              name="ZIP"
              type="text"
              className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"
              placeholder={`Enter ZIP or postal code`}
            ></Field>
            <ErrorMessage name="ZIP" component="span"></ErrorMessage>
          </div>
        </div>
      </div>
    </div>
  );
}
