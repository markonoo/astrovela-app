"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserInfoFormProps {
  userInfo: {
    firstName: string
    lastName: string
    placeOfBirth: string
    dateOfBirth: string
  }
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      firstName: string
      lastName: string
      placeOfBirth: string
      dateOfBirth: string
    }>
  >
}

export function UserInfoForm({ userInfo, setUserInfo }: UserInfoFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <Label htmlFor="firstName" className="tracking-wider font-normal text-sm">
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            className="tracking-wider text-sm h-8"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="lastName" className="tracking-wider font-normal text-sm">
            Last Name <span className="text-gray-400 text-xs">(optional)</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            className="tracking-wider text-sm h-8"
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="placeOfBirth" className="tracking-wider font-normal text-sm">
          Place of Birth
        </Label>
        <Input
          id="placeOfBirth"
          name="placeOfBirth"
          value={userInfo.placeOfBirth}
          onChange={handleChange}
          placeholder="Enter place of birth"
          className="tracking-wider text-sm h-8"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="dateOfBirth" className="tracking-wider font-normal text-sm">
          Date of Birth
        </Label>
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          value={userInfo.dateOfBirth}
          onChange={handleChange}
          placeholder="MM/DD/YYYY"
          type="date"
          className="tracking-wider text-sm h-8"
        />
      </div>
    </div>
  )
}
