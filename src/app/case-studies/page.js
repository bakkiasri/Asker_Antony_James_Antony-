export default function CaseStudies() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Case Studies</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Digital Marketing Strategy & Execution
            </h2>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>Managed 6 supplement brands simultaneously.</li>
              <li>Executed 50+ digital marketing campaigns annually.</li>
              <li>Improved SEO rankings and organic traffic.</li>
              <li>Coordinated seasonal promotional campaigns.</li>
              <li>Managed email marketing workflows.</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
