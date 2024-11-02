import Pricing from "./Pricing";

function Chatscreen() {
  return (
    <section className="rounded-3xl min-w-96 max-[390px]:min-w-[85vw] border-[12px] max-[390px]:border-8 bg-appBg border-white shadow-2xl overflow-hidden">
      <header className="rounded-t-2xl rounded-b-lg pt-12 p-6 flex items-center gap-1 bg-gradient-to-r from-gdViolet to-gdMagenta text-white shadow-md relative isolate before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-8 before:bg-white before:w-[65%] before:rounded-b-3xl [&_ion-icon]:text-2xl [&_ion-icon]:cursor-pointer">
        <ion-icon name="chevron-back-outline"></ion-icon>

        <div className="flex-1 flex items-center gap-3">
          <img
            src="/images/avatar.jpg"
            alt="user"
            className="rounded-full size-14 max-[390px]:size-12 object-cover border-4 border-white/70"
          />

          <div>
            <p className="text-xl font-semibold max-[390px]:text-[1rem]">
              Samuel Green
            </p>
            <p className="text-appSubHeading max-[390px]:text-sm">
              Available to Walk
            </p>
          </div>
        </div>

        <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
      </header>

      {/* message section */}
      <div className="py-8 px-5 text-xs flex flex-col gap-6 [&_.left]:space-y-3 [&_.left>p]:bg-gray-200 [&_.left>p]:p-3 [&_.left>p]:rounded-xl [&_.left>p]:rounded-bl-sm [&_.left>p]:text-leftText [&_.left>p]:max-w-[23ch] [&_.right]:self-end [&_.right]:flex [&_.right]:flex-col [&_.right]:space-y-3 [&_.right>p]:bg-white [&_.right>p]:p-3 [&_.right>p]:rounded-xl [&_.right>p]:rounded-br-sm [&_.right>p]:text-rightText [&_.right>p]:max-w-[23ch] [&_.right>p]:shadow-md [&_.right>p]:self-end">
        <div className="left">
          <p>That sounds great. I&#39;d be happy with that.</p>
          <p>Could you send over some pictures of your dog, please?</p>
        </div>

        <div className="right">
          <div className="flex items-center gap-2 [&_img]:size-16 [&_img]:object-cover [&_img]:rounded-lg [&_img]:cursor-pointer">
            <img src="/images/dog-image-1.jpg" alt="dog photo" />
            <img src="/images/dog-image-2.jpg" alt="dog photo" />
            <img src="/images/dog-image-3.jpg" alt="dog photo" />
          </div>

          <p>Here are a few pictures. She&#39;s a happy girl!</p>
          <p>Can you make it?</p>
        </div>

        <div className="left">
          <p>
            She looks so happy! The time we discussed works. How long shall I
            take her out for?
          </p>

          <Pricing price="$29" duration="30 minute walk " />
          <Pricing price="$49" duration="1 hour walk " />
        </div>
      </div>

      <footer className="bg-white flex items-center p-3 mx-4 mb-4 rounded-full relative isolate">
        <input
          type="text"
          name="message"
          placeholder="Type a message…"
          className="flex-1 pl-5 outline-none max-[375px]:w-[80%]"
        />
        <button className="bg-submitBtnBg grid place-items-center rounded-full p-3 text-xl cursor-pointer text-white">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </footer>
    </section>
  );
}

export default Chatscreen;
