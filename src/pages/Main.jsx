import SocialNet from '../components/SocialNet'

const Main = () => {
  return (
    <div className=" 320px-639px:h-[100%] 320px-639px:justify-start h-[800px] pb-4 flex flex-col justify-center items-center selection:bg-yellow">
      <h1 className=" 320px-639px:text-[2rem] sm:text-[2.5rem] md:text-[4.5rem] drop-shadow-lg text-yellow font-caveat font-bold  ">
        The Simpsons Quotes Project
      </h1>
      <div className="mb-[2rem] mt-[1rem] mx-5 p-3 border rounded-md bg-pink">
        <p className="320px-639px:text-[1rem] sm:text-[1.2rem]drop-shadow-lg text-center  text-white font-poppins">
          <span className="320px-639px:text-[1.3rem] sm:text-[1.5rem] drop-shadow-lg  text-yellow">
            Hello!
          </span>{' '}
          <br />
          My name is{' '}
          <span className="320px-639px:text-[1.3rem] sm:text-[1.5rem] text-yellow">Adis</span> and
          I&apos;m a
          <span className="320px-639px:text-[1.3rem] sm:text-[1.5rem] text-yellow">
            {' '}
            Frontend Developer
          </span>{' '}
          with over a year of experience.
          <br />
          If you want to take a closer look at my portfolio, you can go to my{' '}
          <span className="320px-639px:text-[1.3rem] sm:text-[1.5rem] text-yellow">GitHub</span>.
          <br />
          <br />
          That project was made using{' '}
          <span className="320px-639px:text-[1.3rem] sm:text-[1.5rem] text-yellow">
            React, Redux, Vite and Tailwindcss
          </span>
          <br />
          <br />I want to say
          <span className="capitalize 320px-639px:text-[1.3rem] sm:text-[1.5rem] text-yellow">
            {' '}
            thank you
          </span>{' '}
          for taking the time to view this project. I&apos;ll be pleased if you{' '}
          <span className="capitalize 320px-639px:text-[1.3rem] sm:text-[1.5rem] text-yellow">
            contact me
          </span>
        </p>
      </div>
      <div className="bg-pink mb-[1rem] mx-5 p-3 border rounded-md">
        <p className="drop-shadow-lg text-center 2xl:text-[1.5rem] xl:text-[1.4rem] lg:text-[1.3rem] sm:text-[1.2rem] text-white font-poppins">
          If you want to get <span className=" drop-shadow-lg text-yellow">one random quote</span>{' '}
          from the Simpsons character, please click on &quot;Random&quot; button
        </p>
      </div>
      <div className="bg-pink mb-[1rem] mx-5 p-3 border rounded-md">
        <p className="drop-shadow-lg text-center 2xl:text-[1.5rem] xl:text-[1.4rem] lg:text-[1.3rem] sm:text-[1.2rem] text-white font-poppins">
          If you want to get a{' '}
          <span className="drop-shadow-lg text-yellow">certain number of quotes</span> from the
          Simpsons characters, please click on &quot;Custom&quot; button
        </p>
      </div>
      <SocialNet className="flex flex-col items-center" />
    </div>
  )
}

export default Main
