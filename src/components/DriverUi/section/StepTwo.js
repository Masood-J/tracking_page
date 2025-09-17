import { User } from "lucide-react";
import FormCard from "@/components/DriverUi/ui/FormCard";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MapPin } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import React, { useState, useEffect } from "react";
import ShowError from "@/components/DriverUi/ui/ShowError";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
import Select from "react-select";
import {useFormikContext} from "formik";

export default function StepTwo({values,setFieldValue}) {
  const [country, setCountry] = useState(null);
  const [currentState, setcurrentState] = useState(null);
  const [city, setCity] = useState(null);
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  const {errors}=useFormikContext();
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
              className={`border border-gray-300 p-2 w-full rounded-xl min-w-30 ${errors.email?"border-red-500":""}`}
            ></Field>
            <ShowError name={`email`}></ShowError>

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
                  inputClass="!w-full p-5 !rounded-xl "
                  buttonClass="!border-gray-300 !border-r-1 !border-l-0 !rounded-l-md !bg-white"
                  containerClass={`!w-full !border-1 !rounded-l-md !border-gray-300 !rounded-r-xl !border-[#e2e8f0] focus-within:!border-red-500 ${errors.phone?"!border-red-500":""}`}

                />
              )}
            </Field>
              <ShowError name={`phone`}></ShowError>    </div>
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
                  inputClass="!w-full p-5 !rounded-xl "
                  buttonClass="!border-gray-300 !border-r-1 !border-l-0 !rounded-l-md !bg-white"
                  containerClass="!w-full !border-1 !rounded-l-md !border-gray-300 !rounded-r-xl !border-[#e2e8f0] focus-within:!border-red-500"

                />
              )}
            </Field>
              <ShowError name={`alt_phone`}></ShowError>
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
              className={`border min-w-30 border-gray-300 p-2 w-full rounded-xl ${errors.Address?"border-red-500":""}`}
            ></Field>
              <ShowError name={`Address`}></ShowError>
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
                        onChange={(e) => {
                            setCountry(e.value);
                            form.setFieldValue("Country", {name:e.label,id:e.value});
                        }}
                        value={
                            form.values.Country
                                ? { value: form.values.Country.id, label: form.values.Country.name }
                                : null
                        }
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderRadius: "10px",
                                borderColor:errors.Country?"#ef4444":"#d1d5dc",
                            }),
                        }}
                    />
                )}
            </Field>
              <ShowError name={`Country`}></ShowError>
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
                        onChange={(e) => {setcurrentState(e.value);
                        form.setFieldValue("State", {name:e.label,id:e.value});}}
                        value={
                            form.values.State
                                ? { value: form.values.State.id, label: form.values.State.name }
                                : null
                        }
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderRadius: "10px",
                                borderColor:errors.State?"#ef4444":"#d1d5dc",
                            }),
                        }}
                    />
                )}
            </Field>
              <ShowError name={`State`}></ShowError> </div>
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
                        onChange={(e) => {setCity(e.value);
                        form.setFieldValue("City", {name:e.label,value:e.value});}}
                        value={
                            form.values.City
                                ? { value: form.values.City.id, label: form.values.City.name }
                                : null
                        }
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderRadius: "10px",
                                borderColor:errors.City?"#ef4444":"#d1d5dc",
                            }),
                        }}
                    />
                )}
            </Field>
              <ShowError name={`City`}></ShowError>
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
              <ShowError name={`ZIP`}></ShowError>  </div>
        </div>
      </div>
    </div>
  );
}
