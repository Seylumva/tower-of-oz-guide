import Head from "next/head";
import Image from "next/image";
import firstJQ from "../public/f23-1.jpg";
import secondJQ from "../public/f23-2.jpg";
import thirdJQ from "../public/f23-3.jpg";
import townBGM from "../data/townBGM";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { MdClose } from "react-icons/md";

export default function Home() {
  const passcodeContainer = useRef(null);

  const passcodeMonsters = [
    "/orange-mushroom.png",
    "/blue-snail.png",
    "/ribbon-pig.png",
    "/green-slime.png",
  ];

  const addMonsterToContainer = (monsterType) => {
    if (passcodeContainer.current.children.length == 8) return;
    const monsterDiv = document.createElement("div");
    monsterDiv.classList.add(
      "rounded-lg",
      "bg-orange-300",
      "grid",
      "place-items-center",
      "aspect-square",
      "w-24"
    );
    monsterDiv.addEventListener("dblclick", (e) => {
      e.currentTarget.remove();
    });
    monsterDiv.innerHTML = `<img src=${monsterType}/>`;
    passcodeContainer.current.append(monsterDiv);
  };

  const resetPasscode = () => {
    if (passcodeContainer.current.children.length == 0) return;
    if (window.confirm("Are you sure you want to reset the passcode?"))
      passcodeContainer.current.innerHTML = "";
  };

  return (
    <div className="pb-10">
      <Head>
        <title>Tower of Oz - Post Destiny</title>
      </Head>
      <header className="my-3">
        <h1 className="mb-2 text-center text-3xl font-bold text-zinc-800">
          Tower of Oz
        </h1>
        <p className="text-center text-sm text-zinc-600">
          Last updated: 8/7/2022
        </p>
      </header>
      <nav className="flex w-full justify-center gap-3">
        <a
          href="#23"
          className="rounded-md bg-lime-200 px-3 py-2 text-lg font-semibold transition hover:bg-lime-400"
        >
          F23
        </a>
        <a
          href="#24"
          className="rounded-md bg-lime-200 px-3 py-2 text-lg font-semibold transition hover:bg-lime-400"
        >
          F24
        </a>
        <a
          href="#36"
          className="rounded-md bg-lime-200 px-3 py-2 text-lg font-semibold transition hover:bg-lime-400"
        >
          F36
        </a>
        <a
          href="#39"
          className="rounded-md bg-lime-200 px-3 py-2 text-lg font-semibold transition hover:bg-lime-400"
        >
          F39
        </a>
      </nav>
      {/* Floor Divs */}
      <main className="container mx-auto flex flex-col gap-5 p-3">
        {/* Floor 23 */}
        <div id="23">
          <h2 className="text-2xl font-semibold">
            Floor 23 - Invisible Jump Quest #1
          </h2>
          <p>
            <span className="font-semibold">Objective:</span> Reach the end of
            the jump quest.
          </p>
          {/* JQ 1-3 */}
          <div className="mt-3">
            <div className="relative aspect-auto w-3/4">
              <Image
                src={firstJQ}
                placeholder="blur"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="relative aspect-auto w-3/4">
              <Image
                src={secondJQ}
                placeholder="blur"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="relative aspect-auto w-3/4">
              <Image
                src={thirdJQ}
                placeholder="blur"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        {/* Floor 24 */}
        <div id="24">
          <h2 className="text-2xl font-semibold">Floor 24 - BGM Quiz</h2>
          <p>
            <span className="font-semibold">Objective:</span> Type in the town
            of the currently playing BGM to proceed.
          </p>
          {/* BGM Embeds */}
          <div className="mt-5 grid grid-cols-4 gap-y-5 gap-x-3">
            {townBGM.map((item, index) => (
              <div key={index}>
                <button
                  className="mb-1 w-full text-center text-xl font-semibold text-blue-500 hover:text-blue-400"
                  onClick={() => {
                    navigator.clipboard.writeText(item.town);
                    toast.success(`📋 ${item.town}`);
                  }}
                >
                  {item.town}
                </button>
                <iframe
                  className="aspect-video"
                  width="100%"
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title="YouTube video player"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Floor 36 */}
        <div id="36">
          <h2 className="text-2xl font-semibold">Floor 36 - Passcode</h2>
          <p>
            <span className="font-semibold">Objective:</span> Hit the monsters
            in the order given by Secreta.
          </p>
          {/* Passcode Buttons */}
          <div className="mx-auto mt-5 flex w-full justify-center gap-5">
            {passcodeMonsters.map((monster, index) => (
              <button
                className="grid aspect-square w-32 place-items-center rounded-full bg-gray-200 transition hover:bg-red-200"
                onClick={() => addMonsterToContainer(monster)}
                key={index}
              >
                <img src={monster} />
              </button>
            ))}
            {/* Reset Passcode */}
            <button
              className="grid aspect-square w-32 place-items-center rounded-full bg-gray-200 transition hover:bg-red-400"
              onClick={resetPasscode}
            >
              <MdClose className="text-6xl" />
            </button>
          </div>
          {/* Passcode Order */}
          <div
            className="mt-10 flex flex-wrap justify-center gap-4 md:flex-nowrap"
            ref={passcodeContainer}
          ></div>
        </div>
        {/* Floor 39 */}
        <div id="39">
          <h2 className="text-2xl font-semibold">Floor 39 - Maple Trivia</h2>
          <p>
            <span className="font-semibold">Objective:</span> Answer the
            questions that One Who Loves Quizzes gives to proceed.
          </p>
          <div>
            <a
              className="mt-5 grid h-48 w-full place-items-center rounded-md bg-sky-200 text-3xl transition hover:bg-sky-300"
              href="https://dexless.com/guides/tower-of-oz-comprehensive-guide.145/#39QA"
              rel="noopener noreferrer"
              target="_blank"
            >
              Q&amp;A List by Sky
            </a>
          </div>
        </div>
        {/* Finished Run */}
        <div>
          <button
            className="w-full bg-lime-200 px-8 py-4 text-xl font-semibold transition hover:bg-lime-400"
            onClick={() => window.scrollTo(0, 0)}
          >
            Finished Run
          </button>
        </div>
      </main>
      {/* https://dexless.com/guides/tower-of-oz-comprehensive-guide.145/#39QA */}
      <ToastContainer pauseOnFocusLoss={false} limit={3} newestOnTop />
    </div>
  );
}
