import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar } from "lucide-react";
import { Movie } from "@/lib/movieRecommendations";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border/50">
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
        <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="font-semibold text-sm">{movie.rating}</span>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg line-clamp-1">{movie.title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar className="w-3 h-3" />
          {movie.year}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {movie.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <Badge key={genre} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
