import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const POPULAR_MOVIES = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Forrest Gump",
  "Inception",
  "The Matrix",
  "Interstellar",
  "Parasite",
  "The Avengers",
];

interface MovieSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const MovieSearch = ({ value, onChange }: MovieSearchProps) => {
  const [inputMode, setInputMode] = useState<"text" | "select">("text");

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Search Method</Label>
        <Select
          value={inputMode}
          onValueChange={(val) => setInputMode(val as "text" | "select")}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">Type movie title</SelectItem>
            <SelectItem value="select">Select from popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {inputMode === "text" ? (
        <div className="space-y-2">
          <Label htmlFor="movie-input">Movie Title</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="movie-input"
              placeholder="e.g., The Matrix"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <Label>Popular Movies</Label>
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a movie" />
            </SelectTrigger>
            <SelectContent>
              {POPULAR_MOVIES.map((movie) => (
                <SelectItem key={movie} value={movie}>
                  {movie}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};
