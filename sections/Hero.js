import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">Hi, I'm <span className="dark:text-emerald-500">Lita</span></h1>
      <h3 className="text-4xl my-3">I am a Front End Developer</h3>
      <p className="text-grey-200 mb-8">I'm Currently build websites using Next.js after React.js it's so much fun</p>
      <Button className="bg-emerald-500 text-white px-5"><a href="mailto:talitazmiza@gmail.com?subject=let's collaboration">Hire Me</a></Button>
    </section>
  )
}

export default Hero