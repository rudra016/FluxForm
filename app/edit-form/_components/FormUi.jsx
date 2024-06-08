import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import FieldEdit from "./FieldEdit";
import { db } from "@/configs";
import { userResponses } from "@/configs/schema";
import moment from "moment/moment";
import { toast } from "sonner";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const FormUi = ({ jsonForm, selectedTheme, onFieldUpdate, deleteField, selectedStyle, editable=true, formId=0, enableSignIn=false }) => {
  let formRef = useRef();
  const {user, isSignedIn} = useUser();
  const formStyle = {
    boxShadow: selectedStyle && selectedStyle.key === 'boxshadow' ? selectedStyle.value : 'none',
    border: selectedStyle && selectedStyle.key === 'border' ? selectedStyle.value : 'none'
  };
  const [formData, setFormData] = useState({});

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const res = await db.insert(userResponses).values({
      jsonResponse: formData,
      createdAt: moment().format('DD/MM/YYYY'),
      formRef: formId
    });
    if (res) {
      formRef.current.reset();
      toast('success');
    } else {
      toast('error');
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  }

  const handleCheckboxChange = (fieldName, itemName, value) => {
    const list = formData?.[fieldName] ? formData?.[fieldName] : [];
    if (value) {
      list.push(itemName);
    } else {
      const result = list.filter((item) => item !== itemName);
      setFormData({ ...formData, [fieldName]: result });
    }
  }

  return (
    <form ref={formRef} onSubmit={onFormSubmit} className="border p-5 md:w-[600px] rounded-lg" data-theme={selectedTheme} style={formStyle}>
      <h2 className="font-bold text-center text-2xl">{jsonForm?.formTitle}</h2>
      <h2 className="text-sm text-gray-400 text-center">{jsonForm?.formHeading}</h2>
      {jsonForm?.fields.map((field, index) => (
        <div key={index} className="flex items-center gap-2">
          {field.fieldType == "select" ? (
            <div className="my-3 w-full">
              <label className="text-xs text-gray-500">{field.label}</label>
              <Select required={field?.required} onValueChange={(v) => handleSelectChange(field.fieldName, v)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {field.options.map((item, index) => (
                    <SelectItem key={index} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : field.fieldType == "radio" ? (
            <div className="my-3 w-full">
              <label className="text-xs text-gray-500">{field.label}</label>
              <RadioGroup required={field?.required}>
                {field.options.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem onClick={() => handleSelectChange(field.fieldName, item.label)} value={item.label} id={item.label} />
                    <Label htmlFor={item.label}>{item.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ) : field.fieldType == "checkbox" ? (
            <div className="my-3 w-full">
              <label className="text-xs text-gray-500">{field?.label}</label>
              {field?.options ? (
                field?.options?.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Checkbox onCheckedChange={(v) => handleCheckboxChange(field?.label, item.label, v)} />
                    <h2>{item.label}</h2>
                  </div>
                ))
              ) : (
                <div className="flex gap-2 items-center">
                  <Checkbox />
                  <h2>{field.label}</h2>
                </div>
              )}
            </div>
          ) : (
            <div className="my-3 w-full">
              <label className="text-xs text-gray-500">{field.label}</label>
              <Input
                type={field?.type}
                placeholder={field.placeholder}
                name={field.fieldName}
                className="bg-transparent"
                onChange={(e) => handleInputChange(e)}
                required={field?.required}
              />
            </div>
          )}
          {editable && (
            <div>
              <FieldEdit defaultValue={field} onUpdate={(value) => onFieldUpdate(value, index)} deleteField={() => deleteField(index)} />
            </div>
          )}
        </div>
      ))}
      {!enableSignIn?
      <button type="submit" className="btn btn-primary">Submit</button>:
      
      isSignedIn?
    <button type="submit" className="btn btn-primary">Submit</button>:
    <Button>
      <SignInButton mode="modal">Sign In before Submit</SignInButton>
    </Button>  
    
      }
    </form>
  );
};

export default FormUi;
