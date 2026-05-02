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
          assessment: "hhttps://tinyurl.com/GMT-COurse-4-Assessment",
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
        }
      ],
    },
  ];

  // Track multiple open weeks
  const [openWeeks, setOpenWeeks] = useState<number[]>([]);

  const toggleWeek = (week: number) => {
    if (openWeeks.includes(week)) {
      setOpenWeeks(openWeeks.filter((w) => w !== week));
    } else {
      setOpenWeeks([...openWeeks, week]);
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
                {week.courses.map((course, idx) => (
                  <div
                    key={course.course ?? idx}
                    className="border p-4 rounded bg-gray-50"
                  >
                    <h3 className="text-lg font-medium mb-2">
                      Course {course.course ?? idx + 1}
                    </h3>
                    {course.videos.map((video, index) => (
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
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
