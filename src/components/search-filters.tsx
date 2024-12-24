"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [cookingTime, setCookingTime] = useState(searchParams.get('cookingTime') || '')
  const [difficulty, setDifficulty] = useState(searchParams.get('difficulty') || '')
  const [dietaryRestriction, setDietaryRestriction] = useState(searchParams.get('dietaryRestriction') || '')

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    params.set('cookingTime', cookingTime)
    params.set('difficulty', difficulty)
    params.set('dietaryRestriction', dietaryRestriction)
    router.push(`/search?${params.toString()}`)
  }, [cookingTime, difficulty, dietaryRestriction])

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="cookingTime">Max Cooking Time (minutes)</Label>
        <Input
          type="number"
          id="cookingTime"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="difficulty">Difficulty</Label>
        <Select value={difficulty} onValueChange={setDifficulty}>
          <SelectTrigger id="difficulty">
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="dietaryRestriction">Dietary Restriction</Label>
        <Select value={dietaryRestriction} onValueChange={setDietaryRestriction}>
          <SelectTrigger id="dietaryRestriction">
            <SelectValue placeholder="Select dietary restriction" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vegan">Vegan</SelectItem>
            <SelectItem value="gluten-free">Gluten-free</SelectItem>
            <SelectItem value="dairy-free">Dairy-free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={() => {
        setCookingTime('')
        setDifficulty('')
        setDietaryRestriction('')
      }}>
        Clear Filters
      </Button>
    </div>
  )
}

