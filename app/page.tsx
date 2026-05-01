import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="text-center max-w-3xl px-6">
        <Image
          src="/logo.jpg"
          alt="Encounter Jesus Ministry Logo"
          width={120}
          height={120}
          className="mx-auto mb-6 rounded-full shadow-lg"
        />
        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mb-6">
          Welcome to Encounter Jesus Ministry International <br />
          School Of Missions Training <br />
          with Apostle Michael Orokpo
        </h1>
        <p className="text-lg md:text-xl mb-8">
          This platform  designed to discard the Discipleship Platform on
          the Encounter Jesus App. It is a dedicated space for structured
          missions training and spiritual growth.
        </p>
        <a
          href="/courses"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          View Courses
        </a>
      </div>
    </div>
  );
}
