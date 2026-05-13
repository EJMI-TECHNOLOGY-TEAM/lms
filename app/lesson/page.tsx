"use client";

import { useState } from "react";

export default function Lesson() {
  const weeklyLessons = [
    {
      week: 1,
      courses: [
        {
          course: 1,
          videos: [
            {
              title: "Introduction to Missions (Part 1)",
              src: "https://adilo.bigcommand.com/watch/ZRGtkTbs",
            },
            {
              title: "Introduction to Missions (Part 2)",
              src: "https://adilo.bigcommand.com/watch/rPCu5ktT",
            },
          ],
          assessment: "https://tinyurl.com/GMT-Course-1-Assessment",
        },
        {
          course: 2,
          videos: [
            {
              title: "The Gospel Message of Missions (Part 1)",
              src: "https://adilo.bigcommand.com/watch/arZIjs52",
            },
            {
              title: "The Gospel Message of Missions (Part 2)",
              src: "https://adilo.bigcommand.com/watch/Eb_XUksR",
            },
          ],
          assessment: "https://tinyurl.com/GMT-Course-2-Assessment",
        },
      ],
    },

    {
      week: 2,
      courses: [
        {
          course: 3,
          videos: [
            {
              title:
                "The Call, Burden & Postures of Missional Readiness (Part 1)",
              src: "https://adilo.bigcommand.com/watch/Jj6LqHLU",
            },
            {
              title:
                "The Call, Burden & Postures of Missional Readiness (Part 2)",
              src: "https://adilo.bigcommand.com/watch/WiItfQ3n",
            },
          ],
          assessment: "https://tinyurl.com/GMT-Course-3-Assessment",
        },

        {
          course: 4,
          videos: [
            {
              title: "THE MAKING OF A MISSIONARY (SPIRITUAL FORMATION) Part 1",
              src: "https://adilo.bigcommand.com/watch/hQyZGKss",
            },
            {
              title: "THE MAKING OF A MISSIONARY (THE FAITHFUL STEWARD) Part 2",
              src: "https://adilo.bigcommand.com/watch/Yh_JrdG9",
            },
          ],
          assessment: "https://tinyurl.com/GMT-COurse-4-Assessment",
        },
      ],
    },

    {
      week: 3,
      courses: [
        {
          course: 5,
          videos: [
            {
              title: "Living in Mission",
              src: "https://adilo.bigcommand.com/watch/HHTKuUSY",
            },
            {
              title: "Holy Spirit in Missions (Part 1)",
              src: "https://adilo.bigcommand.com/watch/dDsh7ZWs",
            },
            {
              title: "Holy Spirit in Missions (Part 2)",
              src: "https://adilo.bigcommand.com/watch/j9oykESo",
            },
          ],
          assessment: "https://tinyurl.com/GMT-Course-5-Assessment",
        },
      ],
    },

    {
      week: 4,
      courses: [
        {
          course: 6,
          videos: [
            {
              title: "Understanding Missions (Local & Cross-Border Dynamics)",
              src: "https://adilo.bigcommand.com/watch/lbHMCbU4",
            },
          ],
          assessment: "https://tinyurl.com/GMT-Course-6-Assessment",
        },

        {
          course: 7,
          videos: [
            {
              title: "Specialized Missions and Strategic Expressions",
              src: "https://adilo.bigcommand.com/watch/6aOYZnRt",
            },
          ],
          assessment: "https://tinyurl.com/GMT-Course-Assessment-7",
        },
      ],
    },

    {
      week: 5,
      courses: [
        {
          course: 8,
          videos: [
            {
              title: "Biblical Worldview & Cultural Intelligence",
              src: "https://adilo.bigcommand.com/watch/wzZVXSIF",
            },
          ],
          assessment: "https://tinyurl.com/GMT-Course-8-Assessment",
        },

        // BONUS VIDEO
        {
          title: "Bonus Video",
          videos: [
            {
              title:
                "Missions with Apostle Michael Orokpo",
              src: "https://adilo.bigcommand.com/watch/rTX2NVR3",
            },
          ],
        },

        // COURSE 9
        {
          course: 9,
          videos: [
            {
              title: "Spiritual Warfare in Missions (The Missionary Intercessor)",
              src: "https://adilo.bigcommand.com/watch/H4gN9Exi",
            },
          ],
        },
      ],
    },
  ];

  // Track open weeks
  const [openWeeks, setOpenWeeks] = useState<number[]>([]);

  // Exam states
  const [showExamPopup, setShowExamPopup] = useState(false);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const toggleWeek = (week: number) => {
    if (openWeeks.includes(week)) {
      setOpenWeeks(openWeeks.filter((w) => w !== week));
    } else {
      setOpenWeeks([...openWeeks, week]);
    }
  };

  // Verify Exam Access
  const handleExamAccess = () => {
    const correctAnswer = "the lord bless us";

    if (answer.trim().toLowerCase() === correctAnswer) {
      window.open(
        "https://tinyurl.com/EJMI-GMT-Final-Exam",
        "_blank"
      );

      setShowExamPopup(false);
      setAnswer("");
      setError("");
    } else {
      setError(
        "Incorrect answer. Please go back and complete Course 9 video."
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Weekly Lessons</h1>

      <div className="space-y-4">
        {weeklyLessons.map((week) => (
          <div key={week.week} className="border rounded p-4">
            <button
              onClick={() => toggleWeek(week.week)}
              className="w-full text-left font-semibold text-xl bg-blue-600 text-white px-4 py-2 rounded"
            >
              Week {week.week}
            </button>

            {openWeeks.includes(week.week) && (
              <div className="mt-4 space-y-6">
                {week.courses.map((course: any, idx) => (
                  <div
                    key={course.course ?? idx}
                    className="border p-4 rounded bg-gray-50"
                  >
                    {/* COURSE TITLE */}
                    {course.course ? (
                      <h3 className="text-lg font-medium mb-2">
                        Course {course.course}
                      </h3>
                    ) : (
                      <h3 className="text-lg font-bold text-purple-700 mb-2">
                        🎁 {course.title}
                      </h3>
                    )}

                    {/* VIDEOS */}
                    {course.videos.map((video: any, index: number) => (
                      <div key={index} className="mb-6">
                        <p className="font-semibold mb-2">{video.title}</p>

                        <iframe
                          src={video.src}
                          title={video.title}
                          className="w-full h-64 border rounded"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ))}

                    {/* ASSESSMENT */}
                    {course.assessment && (
                      <div className="mt-4">
                        <p className="mb-2 text-gray-700">
                          After completing this course, please take the
                          assessment below:
                        </p>

                        <a
                          href={course.assessment}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                        >
                          Take Assessment
                        </a>
                      </div>
                    )}

                    {/* COURSE 9 EXAM SECTION */}
                    {course.course === 9 && (
                      <div className="mt-8 bg-yellow-100 border border-yellow-400 p-6 rounded-lg text-center">
                        <h2 className="text-2xl font-bold text-yellow-800 mb-3">
                          🎉 Congratulations!
                        </h2>

                        <p className="text-gray-700 mb-5">
                          You have completed all courses successfully. You can
                          now proceed to your final exam.
                        </p>

                        <button
                          onClick={() => setShowExamPopup(true)}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                        >
                          Proceed to Exam
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* EXAM POPUP */}
      {showExamPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Verification Required
            </h2>

            <p className="mb-3 text-gray-700">
              What was the last sentence of Dr. Divine?
            </p>

            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your answer"
              className="w-full border rounded px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {error && (
              <p className="text-red-600 text-sm mb-4">{error}</p>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleExamAccess}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
              >
                Submit
              </button>

              <button
                onClick={() => {
                  setShowExamPopup(false);
                  setAnswer("");
                  setError("");
                }}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-black py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
      }
