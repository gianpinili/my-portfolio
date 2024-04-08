function Contacts() {
  return (
    <div className="my-0 mx-16 md:my-[-2rem]  md:mx-12 md:px-[6rem] mb-[5vh] md:mb-[10vh] lg:my-[-2rem] lg:mb-[9vh] lg:px-[8rem] xl:px-[10rem] xl:my-[-3rem] xl:mb-[7vh] 2xl:px-[18rem]">
      <h1 className="text-5xl font-bold text-center mb-8 lg:text-[3.5rem] lg:mb-10 xl:text-[4rem] xl:mb-16">
        Let's talk!
      </h1>
      <div className="flex justify-between mb-8 md:justify-around">
        <a
          href="mailto:gianpinili@gmail.com"
          className="text-[.8rem] uppercase text-active hover:text-[.85rem] duration-200"
        >
          Send me an Email
        </a>
        <a
          href="https://www.linkedin.com/in/ianpinili/"
          target="_blank"
          className="text-[.8rem] uppercase text-active hover:text-[.85rem] duration-200"
        >
          Connect on LinkedIn
        </a>
      </div>
      <div className="w-full h-[1px] bg-active flex justify-center relative mb-12">
        <div className="w-[20px] h-[20px] bg-primary absolute top-[-10px] rounded-full"></div>
      </div>
      <form className="flex flex-col gap-4 xl:px-[6rem]">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">
            What's your name? <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-slate-400 p-2 bg-opacity-10 rounded-md focus:outline-none focus:border-primary focus:border-solid focus:border-[1px]"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">
            What's your email? <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-slate-400 p-2 bg-opacity-10 rounded-md focus:outline-none  focus:border-primary focus:border-solid focus:border-[1px]"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="number">
            What's your number? <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-slate-400 p-2 bg-opacity-10 rounded-md focus:outline-none  focus:border-primary focus:border-solid focus:border-[1px]"
            type="text"
            name="number"
            id="number"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">
            Let's chat! <span className="text-red-500">*</span>
          </label>
          <textarea
            className="bg-slate-400 p-2 bg-opacity-10 rounded-md resize-none h-[8rem] focus:outline-none  focus:border-primary focus:border-solid focus:border-[1px]"
            name="message"
            id="message"
          ></textarea>
        </div>
        <div>
          <button className="rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contacts;
