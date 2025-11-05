import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Preferences } from "@/lib/movieRecommendations";

const AVAILABLE_GENRES = [
  "Action",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Thriller",
  "Horror",
  "Romance",
  "Animation",
  "Documentary",
  "Fantasy",
];

interface PreferenceFilterProps {
  preferences: Preferences;
  onChange: (preferences: Preferences) => void;
}

export const PreferenceFilter = ({ preferences, onChange }: PreferenceFilterProps) => {
  const toggleGenre = (genre: string) => {
    const newGenres = preferences.genres.includes(genre)
      ? preferences.genres.filter((g) => g !== genre)
      : [...preferences.genres, genre];
    onChange({ ...preferences, genres: newGenres });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Refine Recommendations</h3>
      </div>

      <div className="space-y-3">
        <Label>Preferred Genres</Label>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_GENRES.map((genre) => (
            <Badge
              key={genre}
              variant={preferences.genres.includes(genre) ? "default" : "outline"}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => toggleGenre(genre)}
            >
              {genre}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {preferences.genres.length === 0
            ? "All genres included"
            : `${preferences.genres.length} genre(s) selected`}
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <Label>Minimum Rating</Label>
          <span className="text-sm font-medium">{preferences.minRating.toFixed(1)}</span>
        </div>
        <Slider
          value={[preferences.minRating]}
          onValueChange={([value]) => onChange({ ...preferences, minRating: value })}
          min={0}
          max={10}
          step={0.5}
          className="w-full"
        />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <Label>Max Results</Label>
          <span className="text-sm font-medium">{preferences.maxResults}</span>
        </div>
        <Slider
          value={[preferences.maxResults]}
          onValueChange={([value]) => onChange({ ...preferences, maxResults: value })}
          min={5}
          max={20}
          step={5}
          className="w-full"
        />
      </div>
    </div>
  );
};
