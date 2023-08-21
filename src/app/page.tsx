import LatestPost from "./components/LatestPosts";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto my-8 px-12 sm:px-16 lg:px-0">
      <h1 className="text-3xl font-bold font-special mb-1" id="title">Meu blog pessoal</h1>
      <p className="text-sm">Olá! Eu me chamo Eduardo e esse é o meu blog, onde falarei sobre hábitos, disciplina e, é claro, <span className='text-specialBlue font-semibold'>código</span>.</p>
      <hr className="bg-ligthGray mt-5 mb-12" />
      <LatestPost />
      <hr className="bg-darkGray mt-12" />
    </main>
  )
}
