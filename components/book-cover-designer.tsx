"use client"

import { useState } from "react"
import { BookCoverPreview } from "./book-cover-preview"
import { UserInfoForm } from "./user-info-form"
import { ColorSelector } from "./color-selector"
import { IconSelector } from "./icon-selector"
import { Button } from "@/components/ui/button"

// Define the available theme colors
export const THEME_COLORS = {
  black: {
    bg: "bg-black",
    text: "text-white",
    border: "border-white",
    className: "bg-black text-white border-white",
  },
  navy: {
    bg: "bg-indigo-950",
    text: "text-white",
    border: "border-white",
    className: "bg-indigo-950 text-white border-white",
  },
  purple: {
    bg: "bg-purple-950",
    text: "text-white",
    border: "border-white",
    className: "bg-purple-950 text-white border-white",
  },
  green: {
    bg: "bg-emerald-950",
    text: "text-white",
    border: "border-white",
    className: "bg-emerald-950 text-white border-white",
  },
  burgundy: {
    bg: "bg-red-900",
    text: "text-white",
    border: "border-white",
    className: "bg-red-900 text-white border-white",
  },
  cream: {
    bg: "bg-amber-50",
    text: "text-black",
    border: "border-black",
    className: "bg-amber-50 text-black border-black",
  },
}

// Define the available icons - reduced to just the two chart options
const ICONS = ["natal-chart", "zodiac-chart"]

export function BookCoverDesigner() {
  // State for user information
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    placeOfBirth: "",
    dateOfBirth: "",
  })

  // State for design choices
  const [selectedColor, setSelectedColor] = useState("cream")
  const [selectedIcon, setSelectedIcon] = useState("natal-chart")

  // Handle form submission
  const handleSubmit = () => {
    if (!userInfo.firstName.trim()) {
      alert("Please enter a first name.")
      return
    }

    // In a real app, this could trigger a download or save functionality
    console.log("Book cover design submitted:", {
      userInfo,
      selectedColor,
      selectedIcon,
    })
    alert("Your book cover design has been created!")
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start justify-center py-4">
      {/* Left side - Book cover preview */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-4">
        <div className="w-[350px] h-[450px]">
          <BookCoverPreview
            userInfo={userInfo}
            themeColor={THEME_COLORS[selectedColor as keyof typeof THEME_COLORS]}
            selectedIcon={selectedIcon}
          />
        </div>
      </div>

      {/* Right side - Customization options */}
      <div className="w-full lg:w-2/5 flex flex-col">
        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col gap-1.5">
          <h2 className="text-base font-medium tracking-wider">Customize Your Cover</h2>
          <UserInfoForm userInfo={userInfo} setUserInfo={setUserInfo} />
          <div className="mt-1">
            <h3 className="text-sm font-medium tracking-wider">Choose a Chart</h3>
            <IconSelector icons={ICONS} selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
          </div>
          <div className="mt-1">
            <h3 className="text-sm font-medium tracking-wider">Choose the color</h3>
            <ColorSelector selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
          </div>
          <Button onClick={handleSubmit} className="w-full bg-amber-400 hover:bg-amber-500 text-black tracking-wider text-sm mt-1 py-1.5">
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
