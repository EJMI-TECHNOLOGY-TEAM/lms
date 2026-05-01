export default function Courses() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Cohorts</h1>
      <p className="mt-2">Only Cohort 1 Lessons is available.</p>
      <ul className="mt-4 space-y-2">
        <li>
          <a href="/lesson" className="text-blue-600 underline">
            Cohort 1 (Classes Ongoing)
          </a>
        </li>
        <li className="text-gray-400">Cohort 2 (Not Started)</li>
        <li className="text-gray-400">Cohort 3 (Not Started)</li>
      </ul>
    </div>
  );
}
