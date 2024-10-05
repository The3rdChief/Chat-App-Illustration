import Chatscreen from "./Chatscreen.jsx";

function App() {
  return (
    <div className="min-h-dvh bg-appBg py-10 grid place-items-center relative isolate">
      {/* background graphic */}
      <div className="pointer-events-none absolute -z-40 top-0 left-0 -translate-x-[20%] w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] bg-gradient-to-tr from-gdViolet to-gdMagenta min-h-[80dvh] rounded-b-full"></div>
      <div className="pointer-events-none fixed -z-50 bottom-0 right-0 translate-x-[20%] w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] bg-gray-200/50 min-h-[80dvh] rounded-t-full"></div>
      {/* background graphic end */}

      <main className="flex flex-col breakpoint:flex-row  items-center gap-20 w-11/12 max-w-4xl">
        {/* Chatscreen */}
        <Chatscreen />

        {/* Copy */}
        <div className="space-y-5 breakpoint:text-left text-centers">
          <h1 className="text-4xl font-medium text-mainHeading">
            Simple booking
          </h1>
          <p className="text-paragraph max-w-[50ch]">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
