const Home = () => {
  return (
    <div className="relative h-screen w-screen bg-neutral-950 text-white">
       <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 10 10\\'%3E%3Cpath d=\\'M0 10L10 0\\' stroke=\\'%23444444\\' stroke-width=\\'0.5\\'/%3E%3C/svg%3E')] opacity-20 bg-repeat" />

      
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold">Perfil de Mario</h1>
        <p className="text-lg font-mono">Mono code code</p>
      </div>
    </div>
  )
}

export default Home