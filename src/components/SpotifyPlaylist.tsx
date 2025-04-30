import { useState, useEffect } from "react"
import { Music, Loader2 } from "lucide-react"

const SpotifyPlaylist = () => {
  const [isLoading, setIsLoading] = useState(true)
  const playlistId = "37i9dQZF1DZ06evO0kdXKr" // Nueva playlist

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      <div className="screen-line-after">
        <h2 className="text-3xl font-medium flex items-center px-4">Música que mas escucho</h2>
      </div>

      <div className="border border-grid dark:border-white/10 rounded-lg overflow-hidden bg-card m-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-[380px]">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Cargando playlist...</p>
            </div>
          </div>
        ) : (
          <iframe
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Music className="h-4 w-4" />
          <span>Powered by Spotify</span>
        </div>
        <a
          href={`https://open.spotify.com/playlist/${playlistId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          Abrir en Spotify
        </a>
      </div>
    </div>
  )
}

export default SpotifyPlaylist